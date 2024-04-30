/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var G_ = Object.create;
    var tn = Object.defineProperty;
    var V_ = Object.getOwnPropertyDescriptor;
    var U_ = Object.getOwnPropertyNames;
    var B_ = Object.getPrototypeOf, k_ = Object.prototype.hasOwnProperty;
    var fe = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports), Ne = (e, t) => {
        for (var r in t) tn(e, r, {get: t[r], enumerable: !0})
    }, ws = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of U_(t)) !k_.call(e, i) && i !== r && tn(e, i, {
            get: () => t[i],
            enumerable: !(n = V_(t, i)) || n.enumerable
        });
        return e
    };
    var ie = (e, t, r) => (r = e != null ? G_(B_(e)) : {}, ws(t || !e || !e.__esModule ? tn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e)), Ze = e => ws(tn({}, "__esModule", {value: !0}), e);
    var wi = c(() => {
        "use strict";
        window.tram = function (e) {
            function t(l, m) {
                var b = new v.Bare;
                return b.init(l, m)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function (m) {
                    return "-" + m.toLowerCase()
                })
            }

            function n(l) {
                var m = parseInt(l.slice(1), 16), b = m >> 16 & 255, x = m >> 8 & 255, _ = 255 & m;
                return [b, x, _]
            }

            function i(l, m, b) {
                return "#" + (1 << 24 | l << 16 | m << 8 | b).toString(16).slice(1)
            }

            function o() {
            }

            function a(l, m) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof m + "] " + m)
            }

            function s(l, m, b) {
                f("Units do not match [" + l + "]: " + m + ", " + b)
            }

            function u(l, m, b) {
                if (m !== void 0 && (b = m), l === void 0) return b;
                var x = b;
                return ct.test(l) || !Dt.test(l) ? x = parseInt(l, 10) : Dt.test(l) && (x = 1e3 * parseFloat(l)), 0 > x && (x = 0), x === x ? x : b
            }

            function f(l) {
                ae.debug && window && window.console.warn(l)
            }

            function E(l) {
                for (var m = -1, b = l ? l.length : 0, x = []; ++m < b;) {
                    var _ = l[m];
                    _ && x.push(_)
                }
                return x
            }

            var g = function (l, m, b) {
                    function x(ee) {
                        return typeof ee == "object"
                    }

                    function _(ee) {
                        return typeof ee == "function"
                    }

                    function w() {
                    }

                    function z(ee, ce) {
                        function G() {
                            var xe = new te;
                            return _(xe.init) && xe.init.apply(xe, arguments), xe
                        }

                        function te() {
                        }

                        ce === b && (ce = ee, ee = Object), G.Bare = te;
                        var re, ve = w[l] = ee[l], Qe = te[l] = G[l] = new w;
                        return Qe.constructor = G, G.mixin = function (xe) {
                            return te[l] = G[l] = z(G, xe)[l], G
                        }, G.open = function (xe) {
                            if (re = {}, _(xe) ? re = xe.call(G, Qe, ve, G, ee) : x(xe) && (re = xe), x(re)) for (var vr in re) m.call(re, vr) && (Qe[vr] = re[vr]);
                            return _(Qe.init) || (Qe.init = ee), G
                        }, G.open(ce)
                    }

                    return z
                }("prototype", {}.hasOwnProperty), p = {
                    ease: ["ease", function (l, m, b, x) {
                        var _ = (l /= x) * l, w = _ * l;
                        return m + b * (-2.75 * w * _ + 11 * _ * _ + -15.5 * w + 8 * _ + .25 * l)
                    }], "ease-in": ["ease-in", function (l, m, b, x) {
                        var _ = (l /= x) * l, w = _ * l;
                        return m + b * (-1 * w * _ + 3 * _ * _ + -3 * w + 2 * _)
                    }], "ease-out": ["ease-out", function (l, m, b, x) {
                        var _ = (l /= x) * l, w = _ * l;
                        return m + b * (.3 * w * _ + -1.6 * _ * _ + 2.2 * w + -1.8 * _ + 1.9 * l)
                    }], "ease-in-out": ["ease-in-out", function (l, m, b, x) {
                        var _ = (l /= x) * l, w = _ * l;
                        return m + b * (2 * w * _ + -5 * _ * _ + 2 * w + 2 * _)
                    }], linear: ["linear", function (l, m, b, x) {
                        return b * l / x + m
                    }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (l, m, b, x) {
                        return b * (l /= x) * l + m
                    }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (l, m, b, x) {
                        return -b * (l /= x) * (l - 2) + m
                    }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (l, m, b, x) {
                        return (l /= x / 2) < 1 ? b / 2 * l * l + m : -b / 2 * (--l * (l - 2) - 1) + m
                    }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (l, m, b, x) {
                        return b * (l /= x) * l * l + m
                    }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (l, m, b, x) {
                        return b * ((l = l / x - 1) * l * l + 1) + m
                    }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (l, m, b, x) {
                        return (l /= x / 2) < 1 ? b / 2 * l * l * l + m : b / 2 * ((l -= 2) * l * l + 2) + m
                    }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (l, m, b, x) {
                        return b * (l /= x) * l * l * l + m
                    }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (l, m, b, x) {
                        return -b * ((l = l / x - 1) * l * l * l - 1) + m
                    }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (l, m, b, x) {
                        return (l /= x / 2) < 1 ? b / 2 * l * l * l * l + m : -b / 2 * ((l -= 2) * l * l * l - 2) + m
                    }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (l, m, b, x) {
                        return b * (l /= x) * l * l * l * l + m
                    }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (l, m, b, x) {
                        return b * ((l = l / x - 1) * l * l * l * l + 1) + m
                    }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (l, m, b, x) {
                        return (l /= x / 2) < 1 ? b / 2 * l * l * l * l * l + m : b / 2 * ((l -= 2) * l * l * l * l + 2) + m
                    }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (l, m, b, x) {
                        return -b * Math.cos(l / x * (Math.PI / 2)) + b + m
                    }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (l, m, b, x) {
                        return b * Math.sin(l / x * (Math.PI / 2)) + m
                    }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (l, m, b, x) {
                        return -b / 2 * (Math.cos(Math.PI * l / x) - 1) + m
                    }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (l, m, b, x) {
                        return l === 0 ? m : b * Math.pow(2, 10 * (l / x - 1)) + m
                    }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (l, m, b, x) {
                        return l === x ? m + b : b * (-Math.pow(2, -10 * l / x) + 1) + m
                    }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (l, m, b, x) {
                        return l === 0 ? m : l === x ? m + b : (l /= x / 2) < 1 ? b / 2 * Math.pow(2, 10 * (l - 1)) + m : b / 2 * (-Math.pow(2, -10 * --l) + 2) + m
                    }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (l, m, b, x) {
                        return -b * (Math.sqrt(1 - (l /= x) * l) - 1) + m
                    }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (l, m, b, x) {
                        return b * Math.sqrt(1 - (l = l / x - 1) * l) + m
                    }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (l, m, b, x) {
                        return (l /= x / 2) < 1 ? -b / 2 * (Math.sqrt(1 - l * l) - 1) + m : b / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + m
                    }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (l, m, b, x, _) {
                        return _ === void 0 && (_ = 1.70158), b * (l /= x) * l * ((_ + 1) * l - _) + m
                    }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (l, m, b, x, _) {
                        return _ === void 0 && (_ = 1.70158), b * ((l = l / x - 1) * l * ((_ + 1) * l + _) + 1) + m
                    }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (l, m, b, x, _) {
                        return _ === void 0 && (_ = 1.70158), (l /= x / 2) < 1 ? b / 2 * l * l * (((_ *= 1.525) + 1) * l - _) + m : b / 2 * ((l -= 2) * l * (((_ *= 1.525) + 1) * l + _) + 2) + m
                    }]
                }, A = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                }, S = document, T = window, C = "bkwld-tram", I = /[\-\.0-9]/g, L = /[A-Z]/, R = "number", D = /^(rgb|#)/,
                M = /(em|cm|mm|in|pt|pc|px)$/, N = /(em|cm|mm|in|pt|pc|px|%)$/, k = /(deg|rad|turn)$/, X = "unitless",
                H = /(all|none) 0s ease 0s/, Y = /^(width|height)$/, Q = " ", q = S.createElement("a"),
                O = ["Webkit", "Moz", "O", "ms"], P = ["-webkit-", "-moz-", "-o-", "-ms-"], U = function (l) {
                    if (l in q.style) return {dom: l, css: l};
                    var m, b, x = "", _ = l.split("-");
                    for (m = 0; m < _.length; m++) x += _[m].charAt(0).toUpperCase() + _[m].slice(1);
                    for (m = 0; m < O.length; m++) if (b = O[m] + x, b in q.style) return {dom: b, css: P[m] + l}
                }, V = t.support = {
                    bind: Function.prototype.bind,
                    transform: U("transform"),
                    transition: U("transition"),
                    backface: U("backface-visibility"),
                    timing: U("transition-timing-function")
                };
            if (V.transition) {
                var Z = V.timing.dom;
                if (q.style[Z] = p["ease-in-back"][0], !q.style[Z]) for (var J in A) p[J][0] = A[J]
            }
            var F = t.frame = function () {
                var l = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                return l && V.bind ? l.bind(T) : function (m) {
                    T.setTimeout(m, 16)
                }
            }(), W = t.now = function () {
                var l = T.performance, m = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return m && V.bind ? m.bind(l) : Date.now || function () {
                    return +new Date
                }
            }(), d = g(function (l) {
                function m($, ne) {
                    var ge = E(("" + $).split(Q)), se = ge[0];
                    ne = ne || {};
                    var we = $e[se];
                    if (!we) return f("Unsupported property: " + se);
                    if (!ne.weak || !this.props[se]) {
                        var Be = we[0], Le = this.props[se];
                        return Le || (Le = this.props[se] = new Be.Bare), Le.init(this.$el, ge, we, ne), Le
                    }
                }

                function b($, ne, ge) {
                    if ($) {
                        var se = typeof $;
                        if (ne || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), se == "number" && ne) return this.timer = new oe({
                            duration: $,
                            context: this,
                            complete: w
                        }), void (this.active = !0);
                        if (se == "string" && ne) {
                            switch ($) {
                                case"hide":
                                    G.call(this);
                                    break;
                                case"stop":
                                    z.call(this);
                                    break;
                                case"redraw":
                                    te.call(this);
                                    break;
                                default:
                                    m.call(this, $, ge && ge[1])
                            }
                            return w.call(this)
                        }
                        if (se == "function") return void $.call(this, this);
                        if (se == "object") {
                            var we = 0;
                            Qe.call(this, $, function (Ee, D_) {
                                Ee.span > we && (we = Ee.span), Ee.stop(), Ee.animate(D_)
                            }, function (Ee) {
                                "wait" in Ee && (we = u(Ee.wait, 0))
                            }), ve.call(this), we > 0 && (this.timer = new oe({
                                duration: we,
                                context: this
                            }), this.active = !0, ne && (this.timer.complete = w));
                            var Be = this, Le = !1, en = {};
                            F(function () {
                                Qe.call(Be, $, function (Ee) {
                                    Ee.active && (Le = !0, en[Ee.name] = Ee.nextStyle)
                                }), Le && Be.$el.css(en)
                            })
                        }
                    }
                }

                function x($) {
                    $ = u($, 0), this.active ? this.queue.push({options: $}) : (this.timer = new oe({
                        duration: $,
                        context: this,
                        complete: w
                    }), this.active = !0)
                }

                function _($) {
                    return this.active ? (this.queue.push({
                        options: $,
                        args: arguments
                    }), void (this.timer.complete = w)) : f("No active transition timer. Use start() or wait() before then().")
                }

                function w() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var $ = this.queue.shift();
                        b.call(this, $.options, !0, $.args)
                    }
                }

                function z($) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var ne;
                    typeof $ == "string" ? (ne = {}, ne[$] = 1) : ne = typeof $ == "object" && $ != null ? $ : this.props, Qe.call(this, ne, xe), ve.call(this)
                }

                function ee($) {
                    z.call(this, $), Qe.call(this, $, vr, F_)
                }

                function ce($) {
                    typeof $ != "string" && ($ = "block"), this.el.style.display = $
                }

                function G() {
                    z.call(this), this.el.style.display = "none"
                }

                function te() {
                    this.el.offsetHeight
                }

                function re() {
                    z.call(this), e.removeData(this.el, C), this.$el = this.el = null
                }

                function ve() {
                    var $, ne, ge = [];
                    this.upstream && ge.push(this.upstream);
                    for ($ in this.props) ne = this.props[$], ne.active && ge.push(ne.string);
                    ge = ge.join(","), this.style !== ge && (this.style = ge, this.el.style[V.transition.dom] = ge)
                }

                function Qe($, ne, ge) {
                    var se, we, Be, Le, en = ne !== xe, Ee = {};
                    for (se in $) Be = $[se], se in Ae ? (Ee.transform || (Ee.transform = {}), Ee.transform[se] = Be) : (L.test(se) && (se = r(se)), se in $e ? Ee[se] = Be : (Le || (Le = {}), Le[se] = Be));
                    for (se in Ee) {
                        if (Be = Ee[se], we = this.props[se], !we) {
                            if (!en) continue;
                            we = m.call(this, se)
                        }
                        ne.call(this, we, Be)
                    }
                    ge && Le && ge.call(this, Le)
                }

                function xe($) {
                    $.stop()
                }

                function vr($, ne) {
                    $.set(ne)
                }

                function F_($) {
                    this.$el.css($)
                }

                function Ue($, ne) {
                    l[$] = function () {
                        return this.children ? M_.call(this, ne, arguments) : (this.el && ne.apply(this, arguments), this)
                    }
                }

                function M_($, ne) {
                    var ge, se = this.children.length;
                    for (ge = 0; se > ge; ge++) $.apply(this.children[ge], ne);
                    return this
                }

                l.init = function ($) {
                    if (this.$el = e($), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ae.keepInherited && !ae.fallback) {
                        var ne = De(this.el, "transition");
                        ne && !H.test(ne) && (this.upstream = ne)
                    }
                    V.backface && ae.hideBackface && de(this.el, V.backface.css, "hidden")
                }, Ue("add", m), Ue("start", b), Ue("wait", x), Ue("then", _), Ue("next", w), Ue("stop", z), Ue("set", ee), Ue("show", ce), Ue("hide", G), Ue("redraw", te), Ue("destroy", re)
            }), v = g(d, function (l) {
                function m(b, x) {
                    var _ = e.data(b, C) || e.data(b, C, new d.Bare);
                    return _.el || _.init(b), x ? _.start(x) : _
                }

                l.init = function (b, x) {
                    var _ = e(b);
                    if (!_.length) return this;
                    if (_.length === 1) return m(_[0], x);
                    var w = [];
                    return _.each(function (z, ee) {
                        w.push(m(ee, x))
                    }), this.children = w, this
                }
            }), y = g(function (l) {
                function m() {
                    var w = this.get();
                    this.update("auto");
                    var z = this.get();
                    return this.update(w), z
                }

                function b(w, z, ee) {
                    return z !== void 0 && (ee = z), w in p ? w : ee
                }

                function x(w) {
                    var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(w);
                    return (z ? i(z[1], z[2], z[3]) : w).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }

                var _ = {duration: 500, ease: "ease", delay: 0};
                l.init = function (w, z, ee, ce) {
                    this.$el = w, this.el = w[0];
                    var G = z[0];
                    ee[2] && (G = ee[2]), Ge[G] && (G = Ge[G]), this.name = G, this.type = ee[1], this.duration = u(z[1], this.duration, _.duration), this.ease = b(z[2], this.ease, _.ease), this.delay = u(z[3], this.delay, _.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Y.test(this.name), this.unit = ce.unit || this.unit || ae.defaultUnit, this.angle = ce.angle || this.angle || ae.defaultAngle, ae.fallback || ce.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + Q + this.duration + "ms" + (this.ease != "ease" ? Q + p[this.ease][0] : "") + (this.delay ? Q + this.delay + "ms" : ""))
                }, l.set = function (w) {
                    w = this.convert(w, this.type), this.update(w), this.redraw()
                }, l.transition = function (w) {
                    this.active = !0, w = this.convert(w, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), w == "auto" && (w = m.call(this))), this.nextStyle = w
                }, l.fallback = function (w) {
                    var z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    w = this.convert(w, this.type), this.auto && (z == "auto" && (z = this.convert(this.get(), this.type)), w == "auto" && (w = m.call(this))), this.tween = new K({
                        from: z,
                        to: w,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, l.get = function () {
                    return De(this.el, this.name)
                }, l.update = function (w) {
                    de(this.el, this.name, w)
                }, l.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, de(this.el, this.name, this.get()));
                    var w = this.tween;
                    w && w.context && w.destroy()
                }, l.convert = function (w, z) {
                    if (w == "auto" && this.auto) return w;
                    var ee, ce = typeof w == "number", G = typeof w == "string";
                    switch (z) {
                        case R:
                            if (ce) return w;
                            if (G && w.replace(I, "") === "") return +w;
                            ee = "number(unitless)";
                            break;
                        case D:
                            if (G) {
                                if (w === "" && this.original) return this.original;
                                if (z.test(w)) return w.charAt(0) == "#" && w.length == 7 ? w : x(w)
                            }
                            ee = "hex or rgb string";
                            break;
                        case M:
                            if (ce) return w + this.unit;
                            if (G && z.test(w)) return w;
                            ee = "number(px) or string(unit)";
                            break;
                        case N:
                            if (ce) return w + this.unit;
                            if (G && z.test(w)) return w;
                            ee = "number(px) or string(unit or %)";
                            break;
                        case k:
                            if (ce) return w + this.angle;
                            if (G && z.test(w)) return w;
                            ee = "number(deg) or string(angle)";
                            break;
                        case X:
                            if (ce || G && N.test(w)) return w;
                            ee = "number(unitless) or string(unit or %)"
                    }
                    return a(ee, w), w
                }, l.redraw = function () {
                    this.el.offsetHeight
                }
            }), h = g(y, function (l, m) {
                l.init = function () {
                    m.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), D))
                }
            }), B = g(y, function (l, m) {
                l.init = function () {
                    m.init.apply(this, arguments), this.animate = this.fallback
                }, l.get = function () {
                    return this.$el[this.name]()
                }, l.update = function (b) {
                    this.$el[this.name](b)
                }
            }), j = g(y, function (l, m) {
                function b(x, _) {
                    var w, z, ee, ce, G;
                    for (w in x) ce = Ae[w], ee = ce[0], z = ce[1] || w, G = this.convert(x[w], ee), _.call(this, z, G, ee)
                }

                l.init = function () {
                    m.init.apply(this, arguments), this.current || (this.current = {}, Ae.perspective && ae.perspective && (this.current.perspective = ae.perspective, de(this.el, this.name, this.style(this.current)), this.redraw()))
                }, l.set = function (x) {
                    b.call(this, x, function (_, w) {
                        this.current[_] = w
                    }), de(this.el, this.name, this.style(this.current)), this.redraw()
                }, l.transition = function (x) {
                    var _ = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: _,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var w, z = {};
                    for (w in this.current) z[w] = w in _ ? _[w] : this.current[w];
                    this.active = !0, this.nextStyle = this.style(z)
                }, l.fallback = function (x) {
                    var _ = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: _,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, l.update = function () {
                    de(this.el, this.name, this.style(this.current))
                }, l.style = function (x) {
                    var _, w = "";
                    for (_ in x) w += _ + "(" + x[_] + ") ";
                    return w
                }, l.values = function (x) {
                    var _, w = {};
                    return b.call(this, x, function (z, ee, ce) {
                        w[z] = ee, this.current[z] === void 0 && (_ = 0, ~z.indexOf("scale") && (_ = 1), this.current[z] = this.convert(_, ce))
                    }), w
                }
            }), K = g(function (l) {
                function m(G) {
                    ee.push(G) === 1 && F(b)
                }

                function b() {
                    var G, te, re, ve = ee.length;
                    if (ve) for (F(b), te = W(), G = ve; G--;) re = ee[G], re && re.render(te)
                }

                function x(G) {
                    var te, re = e.inArray(G, ee);
                    re >= 0 && (te = ee.slice(re + 1), ee.length = re, te.length && (ee = ee.concat(te)))
                }

                function _(G) {
                    return Math.round(G * ce) / ce
                }

                function w(G, te, re) {
                    return i(G[0] + re * (te[0] - G[0]), G[1] + re * (te[1] - G[1]), G[2] + re * (te[2] - G[2]))
                }

                var z = {ease: p.ease[1], from: 0, to: 1};
                l.init = function (G) {
                    this.duration = G.duration || 0, this.delay = G.delay || 0;
                    var te = G.ease || z.ease;
                    p[te] && (te = p[te][1]), typeof te != "function" && (te = z.ease), this.ease = te, this.update = G.update || o, this.complete = G.complete || o, this.context = G.context || this, this.name = G.name;
                    var re = G.from, ve = G.to;
                    re === void 0 && (re = z.from), ve === void 0 && (ve = z.to), this.unit = G.unit || "", typeof re == "number" && typeof ve == "number" ? (this.begin = re, this.change = ve - re) : this.format(ve, re), this.value = this.begin + this.unit, this.start = W(), G.autoplay !== !1 && this.play()
                }, l.play = function () {
                    this.active || (this.start || (this.start = W()), this.active = !0, m(this))
                }, l.stop = function () {
                    this.active && (this.active = !1, x(this))
                }, l.render = function (G) {
                    var te, re = G - this.start;
                    if (this.delay) {
                        if (re <= this.delay) return;
                        re -= this.delay
                    }
                    if (re < this.duration) {
                        var ve = this.ease(re, 0, 1, this.duration);
                        return te = this.startRGB ? w(this.startRGB, this.endRGB, ve) : _(this.begin + ve * this.change), this.value = te + this.unit, void this.update.call(this.context, this.value)
                    }
                    te = this.endHex || this.begin + this.change, this.value = te + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, l.format = function (G, te) {
                    if (te += "", G += "", G.charAt(0) == "#") return this.startRGB = n(te), this.endRGB = n(G), this.endHex = G, this.begin = 0, void (this.change = 1);
                    if (!this.unit) {
                        var re = te.replace(I, ""), ve = G.replace(I, "");
                        re !== ve && s("tween", te, G), this.unit = re
                    }
                    te = parseFloat(te), G = parseFloat(G), this.begin = this.value = te, this.change = G - te
                }, l.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var ee = [], ce = 1e3
            }), oe = g(K, function (l) {
                l.init = function (m) {
                    this.duration = m.duration || 0, this.complete = m.complete || o, this.context = m.context, this.play()
                }, l.render = function (m) {
                    var b = m - this.start;
                    b < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }), me = g(K, function (l, m) {
                l.init = function (b) {
                    this.context = b.context, this.update = b.update, this.tweens = [], this.current = b.current;
                    var x, _;
                    for (x in b.values) _ = b.values[x], this.current[x] !== _ && this.tweens.push(new K({
                        name: x,
                        from: this.current[x],
                        to: _,
                        duration: b.duration,
                        delay: b.delay,
                        ease: b.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, l.render = function (b) {
                    var x, _, w = this.tweens.length, z = !1;
                    for (x = w; x--;) _ = this.tweens[x], _.context && (_.render(b), this.current[_.name] = _.value, z = !0);
                    return z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }, l.destroy = function () {
                    if (m.destroy.call(this), this.tweens) {
                        var b, x = this.tweens.length;
                        for (b = x; b--;) this.tweens[b].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }), ae = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !V.transition,
                agentTests: []
            };
            t.fallback = function (l) {
                if (!V.transition) return ae.fallback = !0;
                ae.agentTests.push("(" + l + ")");
                var m = new RegExp(ae.agentTests.join("|"), "i");
                ae.fallback = m.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function (l) {
                return new K(l)
            }, t.delay = function (l, m, b) {
                return new oe({complete: m, duration: l, context: b})
            }, e.fn.tram = function (l) {
                return t.call(null, this, l)
            };
            var de = e.style, De = e.css, Ge = {transform: V.transform && V.transform.css}, $e = {
                color: [h, D],
                background: [h, D, "background-color"],
                "outline-color": [h, D],
                "border-color": [h, D],
                "border-top-color": [h, D],
                "border-right-color": [h, D],
                "border-bottom-color": [h, D],
                "border-left-color": [h, D],
                "border-width": [y, M],
                "border-top-width": [y, M],
                "border-right-width": [y, M],
                "border-bottom-width": [y, M],
                "border-left-width": [y, M],
                "border-spacing": [y, M],
                "letter-spacing": [y, M],
                margin: [y, M],
                "margin-top": [y, M],
                "margin-right": [y, M],
                "margin-bottom": [y, M],
                "margin-left": [y, M],
                padding: [y, M],
                "padding-top": [y, M],
                "padding-right": [y, M],
                "padding-bottom": [y, M],
                "padding-left": [y, M],
                "outline-width": [y, M],
                opacity: [y, R],
                top: [y, N],
                right: [y, N],
                bottom: [y, N],
                left: [y, N],
                "font-size": [y, N],
                "text-indent": [y, N],
                "word-spacing": [y, N],
                width: [y, N],
                "min-width": [y, N],
                "max-width": [y, N],
                height: [y, N],
                "min-height": [y, N],
                "max-height": [y, N],
                "line-height": [y, X],
                "scroll-top": [B, R, "scrollTop"],
                "scroll-left": [B, R, "scrollLeft"]
            }, Ae = {};
            V.transform && ($e.transform = [j], Ae = {
                x: [N, "translateX"],
                y: [N, "translateY"],
                rotate: [k],
                rotateX: [k],
                rotateY: [k],
                scale: [R],
                scaleX: [R],
                scaleY: [R],
                skew: [k],
                skewX: [k],
                skewY: [k]
            }), V.transform && V.backface && (Ae.z = [N, "translateZ"], Ae.rotateZ = [k], Ae.scaleZ = [R], Ae.perspective = [M]);
            var ct = /ms/, Dt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Cs = c((wB, Ss) => {
        "use strict";
        var X_ = window.$, W_ = wi() && X_.tram;
        Ss.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}, r = Array.prototype, n = Object.prototype, i = Function.prototype, o = r.push, a = r.slice,
                s = r.concat, u = n.toString, f = n.hasOwnProperty, E = r.forEach, g = r.map, p = r.reduce,
                A = r.reduceRight, S = r.filter, T = r.every, C = r.some, I = r.indexOf, L = r.lastIndexOf,
                R = Array.isArray, D = Object.keys, M = i.bind, N = e.each = e.forEach = function (O, P, U) {
                    if (O == null) return O;
                    if (E && O.forEach === E) O.forEach(P, U); else if (O.length === +O.length) {
                        for (var V = 0, Z = O.length; V < Z; V++) if (P.call(U, O[V], V, O) === t) return
                    } else for (var J = e.keys(O), V = 0, Z = J.length; V < Z; V++) if (P.call(U, O[J[V]], J[V], O) === t) return;
                    return O
                };
            e.map = e.collect = function (O, P, U) {
                var V = [];
                return O == null ? V : g && O.map === g ? O.map(P, U) : (N(O, function (Z, J, F) {
                    V.push(P.call(U, Z, J, F))
                }), V)
            }, e.find = e.detect = function (O, P, U) {
                var V;
                return k(O, function (Z, J, F) {
                    if (P.call(U, Z, J, F)) return V = Z, !0
                }), V
            }, e.filter = e.select = function (O, P, U) {
                var V = [];
                return O == null ? V : S && O.filter === S ? O.filter(P, U) : (N(O, function (Z, J, F) {
                    P.call(U, Z, J, F) && V.push(Z)
                }), V)
            };
            var k = e.some = e.any = function (O, P, U) {
                P || (P = e.identity);
                var V = !1;
                return O == null ? V : C && O.some === C ? O.some(P, U) : (N(O, function (Z, J, F) {
                    if (V || (V = P.call(U, Z, J, F))) return t
                }), !!V)
            };
            e.contains = e.include = function (O, P) {
                return O == null ? !1 : I && O.indexOf === I ? O.indexOf(P) != -1 : k(O, function (U) {
                    return U === P
                })
            }, e.delay = function (O, P) {
                var U = a.call(arguments, 2);
                return setTimeout(function () {
                    return O.apply(null, U)
                }, P)
            }, e.defer = function (O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function (O) {
                var P, U, V;
                return function () {
                    P || (P = !0, U = arguments, V = this, W_.frame(function () {
                        P = !1, O.apply(V, U)
                    }))
                }
            }, e.debounce = function (O, P, U) {
                var V, Z, J, F, W, d = function () {
                    var v = e.now() - F;
                    v < P ? V = setTimeout(d, P - v) : (V = null, U || (W = O.apply(J, Z), J = Z = null))
                };
                return function () {
                    J = this, Z = arguments, F = e.now();
                    var v = U && !V;
                    return V || (V = setTimeout(d, P)), v && (W = O.apply(J, Z), J = Z = null), W
                }
            }, e.defaults = function (O) {
                if (!e.isObject(O)) return O;
                for (var P = 1, U = arguments.length; P < U; P++) {
                    var V = arguments[P];
                    for (var Z in V) O[Z] === void 0 && (O[Z] = V[Z])
                }
                return O
            }, e.keys = function (O) {
                if (!e.isObject(O)) return [];
                if (D) return D(O);
                var P = [];
                for (var U in O) e.has(O, U) && P.push(U);
                return P
            }, e.has = function (O, P) {
                return f.call(O, P)
            }, e.isObject = function (O) {
                return O === Object(O)
            }, e.now = Date.now || function () {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/, H = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
                Y = /\\|'|\r|\n|\u2028|\u2029/g, Q = function (O) {
                    return "\\" + H[O]
                }, q = /^\s*(\w|\$)+\s*$/;
            return e.template = function (O, P, U) {
                !P && U && (P = U), P = e.defaults({}, P, e.templateSettings);
                var V = RegExp([(P.escape || X).source, (P.interpolate || X).source, (P.evaluate || X).source].join("|") + "|$", "g"),
                    Z = 0, J = "__p+='";
                O.replace(V, function (v, y, h, B, j) {
                    return J += O.slice(Z, j).replace(Y, Q), Z = j + v.length, y ? J += `'+
((__t=(` + y + `))==null?'':_.escape(__t))+
'` : h ? J += `'+
((__t=(` + h + `))==null?'':__t)+
'` : B && (J += `';
` + B + `
__p+='`), v
                }), J += `';
`;
                var F = P.variable;
                if (F) {
                    if (!q.test(F)) throw new Error("variable is not a bare identifier: " + F)
                } else J = `with(obj||{}){
` + J + `}
`, F = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var W;
                try {
                    W = new Function(P.variable || "obj", "_", J)
                } catch (v) {
                    throw v.source = J, v
                }
                var d = function (v) {
                    return W.call(this, v, e)
                };
                return d.source = "function(" + F + `){
` + J + "}", d
            }, e
        }()
    });
    var et = c((SB, Ds) => {
        "use strict";
        var ue = {}, Gt = {}, Vt = [], Ci = window.Webflow || [], Et = window.jQuery, Xe = Et(window),
            H_ = Et(document), Je = Et.isFunction, ke = ue._ = Cs(), Ls = ue.tram = wi() && Et.tram, nn = !1, Ri = !1;
        Ls.config.hideBackface = !1;
        Ls.config.keepInherited = !0;
        ue.define = function (e, t, r) {
            Gt[e] && Ps(Gt[e]);
            var n = Gt[e] = t(Et, ke, r) || {};
            return Ns(n), n
        };
        ue.require = function (e) {
            return Gt[e]
        };

        function Ns(e) {
            ue.env() && (Je(e.design) && Xe.on("__wf_design", e.design), Je(e.preview) && Xe.on("__wf_preview", e.preview)), Je(e.destroy) && Xe.on("__wf_destroy", e.destroy), e.ready && Je(e.ready) && j_(e)
        }

        function j_(e) {
            if (nn) {
                e.ready();
                return
            }
            ke.contains(Vt, e.ready) || Vt.push(e.ready)
        }

        function Ps(e) {
            Je(e.design) && Xe.off("__wf_design", e.design), Je(e.preview) && Xe.off("__wf_preview", e.preview), Je(e.destroy) && Xe.off("__wf_destroy", e.destroy), e.ready && Je(e.ready) && z_(e)
        }

        function z_(e) {
            Vt = ke.filter(Vt, function (t) {
                return t !== e.ready
            })
        }

        ue.push = function (e) {
            if (nn) {
                Je(e) && e();
                return
            }
            Ci.push(e)
        };
        ue.env = function (e) {
            var t = window.__wf_design, r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var rn = navigator.userAgent.toLowerCase(),
            qs = ue.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            K_ = ue.env.chrome = /chrome/.test(rn) && /Google/.test(navigator.vendor) && parseInt(rn.match(/chrome\/(\d+)\./)[1], 10),
            Y_ = ue.env.ios = /(ipod|iphone|ipad)/.test(rn);
        ue.env.safari = /safari/.test(rn) && !K_ && !Y_;
        var Si;
        qs && H_.on("touchstart mousedown", function (e) {
            Si = e.target
        });
        ue.validClick = qs ? function (e) {
            return e === Si || Et.contains(e, Si)
        } : function () {
            return !0
        };
        var Fs = "resize.webflow orientationchange.webflow load.webflow", $_ = "scroll.webflow " + Fs;
        ue.resize = Li(Xe, Fs);
        ue.scroll = Li(Xe, $_);
        ue.redraw = Li();

        function Li(e, t) {
            var r = [], n = {};
            return n.up = ke.throttle(function (i) {
                ke.each(r, function (o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function (i) {
                typeof i == "function" && (ke.contains(r, i) || r.push(i))
            }, n.off = function (i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ke.filter(r, function (o) {
                    return o !== i
                })
            }, n
        }

        ue.location = function (e) {
            window.location = e
        };
        ue.env() && (ue.location = function () {
        });
        ue.ready = function () {
            nn = !0, Ri ? Q_() : ke.each(Vt, Rs), ke.each(Ci, Rs), ue.resize.up()
        };

        function Rs(e) {
            Je(e) && e()
        }

        function Q_() {
            Ri = !1, ke.each(Gt, Ns)
        }

        var xt;
        ue.load = function (e) {
            xt.then(e)
        };

        function Ms() {
            xt && (xt.reject(), Xe.off("load", xt.resolve)), xt = new Et.Deferred, Xe.on("load", xt.resolve)
        }

        ue.destroy = function (e) {
            e = e || {}, Ri = !0, Xe.triggerHandler("__wf_destroy"), e.domready != null && (nn = e.domready), ke.each(Gt, Ps), ue.resize.off(), ue.scroll.off(), ue.redraw.off(), Vt = [], Ci = [], xt.state() === "pending" && Ms()
        };
        Et(ue.ready);
        Ms();
        Ds.exports = window.Webflow = ue
    });
    var Us = c((CB, Vs) => {
        "use strict";
        var Gs = et();
        Gs.define("brand", Vs.exports = function (e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function () {
                var A = n.attr("data-wf-status"), S = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(S) && a.hostname !== S && (A = !0), A && !s && (f = f || g(), p(), setTimeout(p, 500), e(r).off(u, E).on(u, E))
            };

            function E() {
                var A = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", A ? "display: none !important;" : "")
            }

            function g() {
                var A = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    S = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return A.append(S, T), A[0]
            }

            function p() {
                var A = i.children(o), S = A.length && A.get(0) === f, T = Gs.env("editor");
                if (S) {
                    T && A.remove();
                    return
                }
                A.length && A.remove(), T || i.append(f)
            }

            return t
        })
    });
    var ks = c((RB, Bs) => {
        "use strict";
        var Z_ = et();
        Z_.define("focus-visible", Bs.exports = function () {
            function e(r) {
                var n = !0, i = !1, o = null, a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

                function s(R) {
                    return !!(R && R !== document && R.nodeName !== "HTML" && R.nodeName !== "BODY" && "classList" in R && "contains" in R.classList)
                }

                function u(R) {
                    var D = R.type, M = R.tagName;
                    return !!(M === "INPUT" && a[D] && !R.readOnly || M === "TEXTAREA" && !R.readOnly || R.isContentEditable)
                }

                function f(R) {
                    R.getAttribute("data-wf-focus-visible") || R.setAttribute("data-wf-focus-visible", "true")
                }

                function E(R) {
                    R.getAttribute("data-wf-focus-visible") && R.removeAttribute("data-wf-focus-visible")
                }

                function g(R) {
                    R.metaKey || R.altKey || R.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
                }

                function p() {
                    n = !1
                }

                function A(R) {
                    s(R.target) && (n || u(R.target)) && f(R.target)
                }

                function S(R) {
                    s(R.target) && R.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function () {
                        i = !1
                    }, 100), E(R.target))
                }

                function T() {
                    document.visibilityState === "hidden" && (i && (n = !0), C())
                }

                function C() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function I() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(R) {
                    R.target.nodeName && R.target.nodeName.toLowerCase() === "html" || (n = !1, I())
                }

                document.addEventListener("keydown", g, !0), document.addEventListener("mousedown", p, !0), document.addEventListener("pointerdown", p, !0), document.addEventListener("touchstart", p, !0), document.addEventListener("visibilitychange", T, !0), C(), r.addEventListener("focus", A, !0), r.addEventListener("blur", S, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }

            return {ready: t}
        })
    });
    var Hs = c((LB, Ws) => {
        "use strict";
        var Xs = et();
        Xs.define("focus", Ws.exports = function () {
            var e = [], t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target, u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Xs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }

            return {ready: o}
        })
    });
    var Ks = c((NB, zs) => {
        "use strict";
        var Ni = window.jQuery, tt = {}, on = [], js = ".w-ix", an = {
            reset: function (e, t) {
                t.__wf_intro = null
            }, intro: function (e, t) {
                t.__wf_intro || (t.__wf_intro = !0, Ni(t).triggerHandler(tt.types.INTRO))
            }, outro: function (e, t) {
                t.__wf_intro && (t.__wf_intro = null, Ni(t).triggerHandler(tt.types.OUTRO))
            }
        };
        tt.triggers = {};
        tt.types = {INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js};
        tt.init = function () {
            for (var e = on.length, t = 0; t < e; t++) {
                var r = on[t];
                r[0](0, r[1])
            }
            on = [], Ni.extend(tt.triggers, an)
        };
        tt.async = function () {
            for (var e in an) {
                var t = an[e];
                an.hasOwnProperty(e) && (tt.triggers[e] = function (r, n) {
                    on.push([t, n])
                })
            }
        };
        tt.async();
        zs.exports = tt
    });
    var qi = c((PB, Qs) => {
        "use strict";
        var Pi = Ks();

        function Ys(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }

        var J_ = window.jQuery, sn = {}, $s = ".w-ix", eb = {
            reset: function (e, t) {
                Pi.triggers.reset(e, t)
            }, intro: function (e, t) {
                Pi.triggers.intro(e, t), Ys(t, "COMPONENT_ACTIVE")
            }, outro: function (e, t) {
                Pi.triggers.outro(e, t), Ys(t, "COMPONENT_INACTIVE")
            }
        };
        sn.triggers = {};
        sn.types = {INTRO: "w-ix-intro" + $s, OUTRO: "w-ix-outro" + $s};
        J_.extend(sn.triggers, eb);
        Qs.exports = sn
    });
    var Zs = c((qB, lt) => {
        function Fi(e) {
            return lt.exports = Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
                return typeof t
            } : function (t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, lt.exports.__esModule = !0, lt.exports.default = lt.exports, Fi(e)
        }

        lt.exports = Fi, lt.exports.__esModule = !0, lt.exports.default = lt.exports
    });
    var un = c((FB, Er) => {
        var tb = Zs().default;

        function Js(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap, r = new WeakMap;
            return (Js = function (i) {
                return i ? r : t
            })(e)
        }

        function rb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || tb(e) !== "object" && typeof e != "function") return {default: e};
            var r = Js(t);
            if (r && r.has(e)) return r.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
            }
            return n.default = e, r && r.set(e, n), n
        }

        Er.exports = rb, Er.exports.__esModule = !0, Er.exports.default = Er.exports
    });
    var eu = c((MB, yr) => {
        function nb(e) {
            return e && e.__esModule ? e : {default: e}
        }

        yr.exports = nb, yr.exports.__esModule = !0, yr.exports.default = yr.exports
    });
    var pe = c((DB, tu) => {
        var cn = function (e) {
            return e && e.Math == Math && e
        };
        tu.exports = cn(typeof globalThis == "object" && globalThis) || cn(typeof window == "object" && window) || cn(typeof self == "object" && self) || cn(typeof global == "object" && global) || function () {
            return this
        }() || Function("return this")()
    });
    var Ut = c((GB, ru) => {
        ru.exports = function (e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var wt = c((VB, nu) => {
        var ib = Ut();
        nu.exports = !ib(function () {
            return Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1] != 7
        })
    });
    var ln = c((UB, iu) => {
        var mr = Function.prototype.call;
        iu.exports = mr.bind ? mr.bind(mr) : function () {
            return mr.apply(mr, arguments)
        }
    });
    var uu = c(su => {
        "use strict";
        var ou = {}.propertyIsEnumerable, au = Object.getOwnPropertyDescriptor, ob = au && !ou.call({1: 2}, 1);
        su.f = ob ? function (t) {
            var r = au(this, t);
            return !!r && r.enumerable
        } : ou
    });
    var Mi = c((kB, cu) => {
        cu.exports = function (e, t) {
            return {enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t}
        }
    });
    var We = c((XB, fu) => {
        var lu = Function.prototype, Di = lu.bind, Gi = lu.call, ab = Di && Di.bind(Gi);
        fu.exports = Di ? function (e) {
            return e && ab(Gi, e)
        } : function (e) {
            return e && function () {
                return Gi.apply(e, arguments)
            }
        }
    });
    var gu = c((WB, pu) => {
        var du = We(), sb = du({}.toString), ub = du("".slice);
        pu.exports = function (e) {
            return ub(sb(e), 8, -1)
        }
    });
    var vu = c((HB, hu) => {
        var cb = pe(), lb = We(), fb = Ut(), db = gu(), Vi = cb.Object, pb = lb("".split);
        hu.exports = fb(function () {
            return !Vi("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return db(e) == "String" ? pb(e, "") : Vi(e)
        } : Vi
    });
    var Ui = c((jB, Eu) => {
        var gb = pe(), hb = gb.TypeError;
        Eu.exports = function (e) {
            if (e == null) throw hb("Can't call method on " + e);
            return e
        }
    });
    var _r = c((zB, yu) => {
        var vb = vu(), Eb = Ui();
        yu.exports = function (e) {
            return vb(Eb(e))
        }
    });
    var rt = c((KB, mu) => {
        mu.exports = function (e) {
            return typeof e == "function"
        }
    });
    var Bt = c((YB, _u) => {
        var yb = rt();
        _u.exports = function (e) {
            return typeof e == "object" ? e !== null : yb(e)
        }
    });
    var br = c(($B, bu) => {
        var Bi = pe(), mb = rt(), _b = function (e) {
            return mb(e) ? e : void 0
        };
        bu.exports = function (e, t) {
            return arguments.length < 2 ? _b(Bi[e]) : Bi[e] && Bi[e][t]
        }
    });
    var Iu = c((QB, Tu) => {
        var bb = We();
        Tu.exports = bb({}.isPrototypeOf)
    });
    var Au = c((ZB, Ou) => {
        var Tb = br();
        Ou.exports = Tb("navigator", "userAgent") || ""
    });
    var Nu = c((JB, Lu) => {
        var Ru = pe(), ki = Au(), xu = Ru.process, wu = Ru.Deno, Su = xu && xu.versions || wu && wu.version,
            Cu = Su && Su.v8, He, fn;
        Cu && (He = Cu.split("."), fn = He[0] > 0 && He[0] < 4 ? 1 : +(He[0] + He[1]));
        !fn && ki && (He = ki.match(/Edge\/(\d+)/), (!He || He[1] >= 74) && (He = ki.match(/Chrome\/(\d+)/), He && (fn = +He[1])));
        Lu.exports = fn
    });
    var Xi = c((e5, qu) => {
        var Pu = Nu(), Ib = Ut();
        qu.exports = !!Object.getOwnPropertySymbols && !Ib(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Pu && Pu < 41
        })
    });
    var Wi = c((t5, Fu) => {
        var Ob = Xi();
        Fu.exports = Ob && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Hi = c((r5, Mu) => {
        var Ab = pe(), xb = br(), wb = rt(), Sb = Iu(), Cb = Wi(), Rb = Ab.Object;
        Mu.exports = Cb ? function (e) {
            return typeof e == "symbol"
        } : function (e) {
            var t = xb("Symbol");
            return wb(t) && Sb(t.prototype, Rb(e))
        }
    });
    var Gu = c((n5, Du) => {
        var Lb = pe(), Nb = Lb.String;
        Du.exports = function (e) {
            try {
                return Nb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Uu = c((i5, Vu) => {
        var Pb = pe(), qb = rt(), Fb = Gu(), Mb = Pb.TypeError;
        Vu.exports = function (e) {
            if (qb(e)) return e;
            throw Mb(Fb(e) + " is not a function")
        }
    });
    var ku = c((o5, Bu) => {
        var Db = Uu();
        Bu.exports = function (e, t) {
            var r = e[t];
            return r == null ? void 0 : Db(r)
        }
    });
    var Wu = c((a5, Xu) => {
        var Gb = pe(), ji = ln(), zi = rt(), Ki = Bt(), Vb = Gb.TypeError;
        Xu.exports = function (e, t) {
            var r, n;
            if (t === "string" && zi(r = e.toString) && !Ki(n = ji(r, e)) || zi(r = e.valueOf) && !Ki(n = ji(r, e)) || t !== "string" && zi(r = e.toString) && !Ki(n = ji(r, e))) return n;
            throw Vb("Can't convert object to primitive value")
        }
    });
    var ju = c((s5, Hu) => {
        Hu.exports = !1
    });
    var dn = c((u5, Ku) => {
        var zu = pe(), Ub = Object.defineProperty;
        Ku.exports = function (e, t) {
            try {
                Ub(zu, e, {value: t, configurable: !0, writable: !0})
            } catch {
                zu[e] = t
            }
            return t
        }
    });
    var pn = c((c5, $u) => {
        var Bb = pe(), kb = dn(), Yu = "__core-js_shared__", Xb = Bb[Yu] || kb(Yu, {});
        $u.exports = Xb
    });
    var Yi = c((l5, Zu) => {
        var Wb = ju(), Qu = pn();
        (Zu.exports = function (e, t) {
            return Qu[e] || (Qu[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: Wb ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var ec = c((f5, Ju) => {
        var Hb = pe(), jb = Ui(), zb = Hb.Object;
        Ju.exports = function (e) {
            return zb(jb(e))
        }
    });
    var yt = c((d5, tc) => {
        var Kb = We(), Yb = ec(), $b = Kb({}.hasOwnProperty);
        tc.exports = Object.hasOwn || function (t, r) {
            return $b(Yb(t), r)
        }
    });
    var $i = c((p5, rc) => {
        var Qb = We(), Zb = 0, Jb = Math.random(), eT = Qb(Number(1).toString);
        rc.exports = function (e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + eT(++Zb + Jb, 36)
        }
    });
    var Qi = c((g5, sc) => {
        var tT = pe(), rT = Yi(), nc = yt(), nT = $i(), ic = Xi(), ac = Wi(), kt = rT("wks"), St = tT.Symbol,
            oc = St && St.for, iT = ac ? St : St && St.withoutSetter || nT;
        sc.exports = function (e) {
            if (!nc(kt, e) || !(ic || typeof kt[e] == "string")) {
                var t = "Symbol." + e;
                ic && nc(St, e) ? kt[e] = St[e] : ac && oc ? kt[e] = oc(t) : kt[e] = iT(t)
            }
            return kt[e]
        }
    });
    var fc = c((h5, lc) => {
        var oT = pe(), aT = ln(), uc = Bt(), cc = Hi(), sT = ku(), uT = Wu(), cT = Qi(), lT = oT.TypeError,
            fT = cT("toPrimitive");
        lc.exports = function (e, t) {
            if (!uc(e) || cc(e)) return e;
            var r = sT(e, fT), n;
            if (r) {
                if (t === void 0 && (t = "default"), n = aT(r, e, t), !uc(n) || cc(n)) return n;
                throw lT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), uT(e, t)
        }
    });
    var Zi = c((v5, dc) => {
        var dT = fc(), pT = Hi();
        dc.exports = function (e) {
            var t = dT(e, "string");
            return pT(t) ? t : t + ""
        }
    });
    var eo = c((E5, gc) => {
        var gT = pe(), pc = Bt(), Ji = gT.document, hT = pc(Ji) && pc(Ji.createElement);
        gc.exports = function (e) {
            return hT ? Ji.createElement(e) : {}
        }
    });
    var to = c((y5, hc) => {
        var vT = wt(), ET = Ut(), yT = eo();
        hc.exports = !vT && !ET(function () {
            return Object.defineProperty(yT("div"), "a", {
                get: function () {
                    return 7
                }
            }).a != 7
        })
    });
    var ro = c(Ec => {
        var mT = wt(), _T = ln(), bT = uu(), TT = Mi(), IT = _r(), OT = Zi(), AT = yt(), xT = to(),
            vc = Object.getOwnPropertyDescriptor;
        Ec.f = mT ? vc : function (t, r) {
            if (t = IT(t), r = OT(r), xT) try {
                return vc(t, r)
            } catch {
            }
            if (AT(t, r)) return TT(!_T(bT.f, t, r), t[r])
        }
    });
    var Tr = c((_5, mc) => {
        var yc = pe(), wT = Bt(), ST = yc.String, CT = yc.TypeError;
        mc.exports = function (e) {
            if (wT(e)) return e;
            throw CT(ST(e) + " is not an object")
        }
    });
    var Ir = c(Tc => {
        var RT = pe(), LT = wt(), NT = to(), _c = Tr(), PT = Zi(), qT = RT.TypeError, bc = Object.defineProperty;
        Tc.f = LT ? bc : function (t, r, n) {
            if (_c(t), r = PT(r), _c(n), NT) try {
                return bc(t, r, n)
            } catch {
            }
            if ("get" in n || "set" in n) throw qT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var gn = c((T5, Ic) => {
        var FT = wt(), MT = Ir(), DT = Mi();
        Ic.exports = FT ? function (e, t, r) {
            return MT.f(e, t, DT(1, r))
        } : function (e, t, r) {
            return e[t] = r, e
        }
    });
    var io = c((I5, Oc) => {
        var GT = We(), VT = rt(), no = pn(), UT = GT(Function.toString);
        VT(no.inspectSource) || (no.inspectSource = function (e) {
            return UT(e)
        });
        Oc.exports = no.inspectSource
    });
    var wc = c((O5, xc) => {
        var BT = pe(), kT = rt(), XT = io(), Ac = BT.WeakMap;
        xc.exports = kT(Ac) && /native code/.test(XT(Ac))
    });
    var oo = c((A5, Cc) => {
        var WT = Yi(), HT = $i(), Sc = WT("keys");
        Cc.exports = function (e) {
            return Sc[e] || (Sc[e] = HT(e))
        }
    });
    var hn = c((x5, Rc) => {
        Rc.exports = {}
    });
    var Mc = c((w5, Fc) => {
        var jT = wc(), qc = pe(), ao = We(), zT = Bt(), KT = gn(), so = yt(), uo = pn(), YT = oo(), $T = hn(),
            Lc = "Object already initialized", lo = qc.TypeError, QT = qc.WeakMap, vn, Or, En, ZT = function (e) {
                return En(e) ? Or(e) : vn(e, {})
            }, JT = function (e) {
                return function (t) {
                    var r;
                    if (!zT(t) || (r = Or(t)).type !== e) throw lo("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        jT || uo.state ? (mt = uo.state || (uo.state = new QT), Nc = ao(mt.get), co = ao(mt.has), Pc = ao(mt.set), vn = function (e, t) {
            if (co(mt, e)) throw new lo(Lc);
            return t.facade = e, Pc(mt, e, t), t
        }, Or = function (e) {
            return Nc(mt, e) || {}
        }, En = function (e) {
            return co(mt, e)
        }) : (Ct = YT("state"), $T[Ct] = !0, vn = function (e, t) {
            if (so(e, Ct)) throw new lo(Lc);
            return t.facade = e, KT(e, Ct, t), t
        }, Or = function (e) {
            return so(e, Ct) ? e[Ct] : {}
        }, En = function (e) {
            return so(e, Ct)
        });
        var mt, Nc, co, Pc, Ct;
        Fc.exports = {set: vn, get: Or, has: En, enforce: ZT, getterFor: JT}
    });
    var Vc = c((S5, Gc) => {
        var fo = wt(), eI = yt(), Dc = Function.prototype, tI = fo && Object.getOwnPropertyDescriptor,
            po = eI(Dc, "name"), rI = po && function () {
            }.name === "something", nI = po && (!fo || fo && tI(Dc, "name").configurable);
        Gc.exports = {EXISTS: po, PROPER: rI, CONFIGURABLE: nI}
    });
    var Wc = c((C5, Xc) => {
        var iI = pe(), Uc = rt(), oI = yt(), Bc = gn(), aI = dn(), sI = io(), kc = Mc(), uI = Vc().CONFIGURABLE,
            cI = kc.get, lI = kc.enforce, fI = String(String).split("String");
        (Xc.exports = function (e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t, u;
            if (Uc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!oI(r, "name") || uI && r.name !== s) && Bc(r, "name", s), u = lI(r), u.source || (u.source = fI.join(typeof s == "string" ? s : ""))), e === iI) {
                o ? e[t] = r : aI(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Bc(e, t, r)
        })(Function.prototype, "toString", function () {
            return Uc(this) && cI(this).source || sI(this)
        })
    });
    var go = c((R5, Hc) => {
        var dI = Math.ceil, pI = Math.floor;
        Hc.exports = function (e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? pI : dI)(t)
        }
    });
    var zc = c((L5, jc) => {
        var gI = go(), hI = Math.max, vI = Math.min;
        jc.exports = function (e, t) {
            var r = gI(e);
            return r < 0 ? hI(r + t, 0) : vI(r, t)
        }
    });
    var Yc = c((N5, Kc) => {
        var EI = go(), yI = Math.min;
        Kc.exports = function (e) {
            return e > 0 ? yI(EI(e), 9007199254740991) : 0
        }
    });
    var Qc = c((P5, $c) => {
        var mI = Yc();
        $c.exports = function (e) {
            return mI(e.length)
        }
    });
    var ho = c((q5, Jc) => {
        var _I = _r(), bI = zc(), TI = Qc(), Zc = function (e) {
            return function (t, r, n) {
                var i = _I(t), o = TI(i), a = bI(n, o), s;
                if (e && r != r) {
                    for (; o > a;) if (s = i[a++], s != s) return !0
                } else for (; o > a; a++) if ((e || a in i) && i[a] === r) return e || a || 0;
                return !e && -1
            }
        };
        Jc.exports = {includes: Zc(!0), indexOf: Zc(!1)}
    });
    var Eo = c((F5, tl) => {
        var II = We(), vo = yt(), OI = _r(), AI = ho().indexOf, xI = hn(), el = II([].push);
        tl.exports = function (e, t) {
            var r = OI(e), n = 0, i = [], o;
            for (o in r) !vo(xI, o) && vo(r, o) && el(i, o);
            for (; t.length > n;) vo(r, o = t[n++]) && (~AI(i, o) || el(i, o));
            return i
        }
    });
    var yn = c((M5, rl) => {
        rl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var il = c(nl => {
        var wI = Eo(), SI = yn(), CI = SI.concat("length", "prototype");
        nl.f = Object.getOwnPropertyNames || function (t) {
            return wI(t, CI)
        }
    });
    var al = c(ol => {
        ol.f = Object.getOwnPropertySymbols
    });
    var ul = c((V5, sl) => {
        var RI = br(), LI = We(), NI = il(), PI = al(), qI = Tr(), FI = LI([].concat);
        sl.exports = RI("Reflect", "ownKeys") || function (t) {
            var r = NI.f(qI(t)), n = PI.f;
            return n ? FI(r, n(t)) : r
        }
    });
    var ll = c((U5, cl) => {
        var MI = yt(), DI = ul(), GI = ro(), VI = Ir();
        cl.exports = function (e, t) {
            for (var r = DI(t), n = VI.f, i = GI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                MI(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var dl = c((B5, fl) => {
        var UI = Ut(), BI = rt(), kI = /#|\.prototype\./, Ar = function (e, t) {
            var r = WI[XI(e)];
            return r == jI ? !0 : r == HI ? !1 : BI(t) ? UI(t) : !!t
        }, XI = Ar.normalize = function (e) {
            return String(e).replace(kI, ".").toLowerCase()
        }, WI = Ar.data = {}, HI = Ar.NATIVE = "N", jI = Ar.POLYFILL = "P";
        fl.exports = Ar
    });
    var gl = c((k5, pl) => {
        var yo = pe(), zI = ro().f, KI = gn(), YI = Wc(), $I = dn(), QI = ll(), ZI = dl();
        pl.exports = function (e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, u, f, E;
            if (n ? a = yo : i ? a = yo[r] || $I(r, {}) : a = (yo[r] || {}).prototype, a) for (s in t) {
                if (f = t[s], e.noTargetGet ? (E = zI(a, s), u = E && E.value) : u = a[s], o = ZI(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                    if (typeof f == typeof u) continue;
                    QI(f, u)
                }
                (e.sham || u && u.sham) && KI(f, "sham", !0), YI(a, s, f, e)
            }
        }
    });
    var vl = c((X5, hl) => {
        var JI = Eo(), e0 = yn();
        hl.exports = Object.keys || function (t) {
            return JI(t, e0)
        }
    });
    var yl = c((W5, El) => {
        var t0 = wt(), r0 = Ir(), n0 = Tr(), i0 = _r(), o0 = vl();
        El.exports = t0 ? Object.defineProperties : function (t, r) {
            n0(t);
            for (var n = i0(r), i = o0(r), o = i.length, a = 0, s; o > a;) r0.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var _l = c((H5, ml) => {
        var a0 = br();
        ml.exports = a0("document", "documentElement")
    });
    var Sl = c((j5, wl) => {
        var s0 = Tr(), u0 = yl(), bl = yn(), c0 = hn(), l0 = _l(), f0 = eo(), d0 = oo(), Tl = ">", Il = "<",
            _o = "prototype", bo = "script", Al = d0("IE_PROTO"), mo = function () {
            }, xl = function (e) {
                return Il + bo + Tl + e + Il + "/" + bo + Tl
            }, Ol = function (e) {
                e.write(xl("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }, p0 = function () {
                var e = f0("iframe"), t = "java" + bo + ":", r;
                return e.style.display = "none", l0.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(xl("document.F=Object")), r.close(), r.F
            }, mn, _n = function () {
                try {
                    mn = new ActiveXObject("htmlfile")
                } catch {
                }
                _n = typeof document < "u" ? document.domain && mn ? Ol(mn) : p0() : Ol(mn);
                for (var e = bl.length; e--;) delete _n[_o][bl[e]];
                return _n()
            };
        c0[Al] = !0;
        wl.exports = Object.create || function (t, r) {
            var n;
            return t !== null ? (mo[_o] = s0(t), n = new mo, mo[_o] = null, n[Al] = t) : n = _n(), r === void 0 ? n : u0(n, r)
        }
    });
    var Rl = c((z5, Cl) => {
        var g0 = Qi(), h0 = Sl(), v0 = Ir(), To = g0("unscopables"), Io = Array.prototype;
        Io[To] == null && v0.f(Io, To, {configurable: !0, value: h0(null)});
        Cl.exports = function (e) {
            Io[To][e] = !0
        }
    });
    var Ll = c(() => {
        "use strict";
        var E0 = gl(), y0 = ho().includes, m0 = Rl();
        E0({target: "Array", proto: !0}, {
            includes: function (t) {
                return y0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        m0("includes")
    });
    var Pl = c(($5, Nl) => {
        var _0 = pe(), b0 = We();
        Nl.exports = function (e, t) {
            return b0(_0[e].prototype[t])
        }
    });
    var Fl = c((Q5, ql) => {
        Ll();
        var T0 = Pl();
        ql.exports = T0("Array", "includes")
    });
    var Dl = c((Z5, Ml) => {
        var I0 = Fl();
        Ml.exports = I0
    });
    var Vl = c((J5, Gl) => {
        var O0 = Dl();
        Gl.exports = O0
    });
    var Oo = c((ek, Ul) => {
        var A0 = typeof global == "object" && global && global.Object === Object && global;
        Ul.exports = A0
    });
    var je = c((tk, Bl) => {
        var x0 = Oo(), w0 = typeof self == "object" && self && self.Object === Object && self,
            S0 = x0 || w0 || Function("return this")();
        Bl.exports = S0
    });
    var Xt = c((rk, kl) => {
        var C0 = je(), R0 = C0.Symbol;
        kl.exports = R0
    });
    var jl = c((nk, Hl) => {
        var Xl = Xt(), Wl = Object.prototype, L0 = Wl.hasOwnProperty, N0 = Wl.toString,
            xr = Xl ? Xl.toStringTag : void 0;

        function P0(e) {
            var t = L0.call(e, xr), r = e[xr];
            try {
                e[xr] = void 0;
                var n = !0
            } catch {
            }
            var i = N0.call(e);
            return n && (t ? e[xr] = r : delete e[xr]), i
        }

        Hl.exports = P0
    });
    var Kl = c((ik, zl) => {
        var q0 = Object.prototype, F0 = q0.toString;

        function M0(e) {
            return F0.call(e)
        }

        zl.exports = M0
    });
    var _t = c((ok, Ql) => {
        var Yl = Xt(), D0 = jl(), G0 = Kl(), V0 = "[object Null]", U0 = "[object Undefined]",
            $l = Yl ? Yl.toStringTag : void 0;

        function B0(e) {
            return e == null ? e === void 0 ? U0 : V0 : $l && $l in Object(e) ? D0(e) : G0(e)
        }

        Ql.exports = B0
    });
    var Ao = c((ak, Zl) => {
        function k0(e, t) {
            return function (r) {
                return e(t(r))
            }
        }

        Zl.exports = k0
    });
    var xo = c((sk, Jl) => {
        var X0 = Ao(), W0 = X0(Object.getPrototypeOf, Object);
        Jl.exports = W0
    });
    var ft = c((uk, ef) => {
        function H0(e) {
            return e != null && typeof e == "object"
        }

        ef.exports = H0
    });
    var wo = c((ck, rf) => {
        var j0 = _t(), z0 = xo(), K0 = ft(), Y0 = "[object Object]", $0 = Function.prototype, Q0 = Object.prototype,
            tf = $0.toString, Z0 = Q0.hasOwnProperty, J0 = tf.call(Object);

        function eO(e) {
            if (!K0(e) || j0(e) != Y0) return !1;
            var t = z0(e);
            if (t === null) return !0;
            var r = Z0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && tf.call(r) == J0
        }

        rf.exports = eO
    });
    var nf = c(So => {
        "use strict";
        Object.defineProperty(So, "__esModule", {value: !0});
        So.default = tO;

        function tO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var of = c((Ro, Co) => {
        "use strict";
        Object.defineProperty(Ro, "__esModule", {value: !0});
        var rO = nf(), nO = iO(rO);

        function iO(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var Wt;
        typeof self < "u" ? Wt = self : typeof window < "u" ? Wt = window : typeof global < "u" ? Wt = global : typeof Co < "u" ? Wt = Co : Wt = Function("return this")();
        var oO = (0, nO.default)(Wt);
        Ro.default = oO
    });
    var Lo = c(wr => {
        "use strict";
        wr.__esModule = !0;
        wr.ActionTypes = void 0;
        wr.default = cf;
        var aO = wo(), sO = uf(aO), uO = of(), af = uf(uO);

        function uf(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var sf = wr.ActionTypes = {INIT: "@@redux/INIT"};

        function cf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(cf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e, o = t, a = [], s = a, u = !1;

            function f() {
                s === a && (s = a.slice())
            }

            function E() {
                return o
            }

            function g(T) {
                if (typeof T != "function") throw new Error("Expected listener to be a function.");
                var C = !0;
                return f(), s.push(T), function () {
                    if (C) {
                        C = !1, f();
                        var L = s.indexOf(T);
                        s.splice(L, 1)
                    }
                }
            }

            function p(T) {
                if (!(0, sO.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, T)
                } finally {
                    u = !1
                }
                for (var C = a = s, I = 0; I < C.length; I++) C[I]();
                return T
            }

            function A(T) {
                if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
                i = T, p({type: sf.INIT})
            }

            function S() {
                var T, C = g;
                return T = {
                    subscribe: function (L) {
                        if (typeof L != "object") throw new TypeError("Expected the observer to be an object.");

                        function R() {
                            L.next && L.next(E())
                        }

                        R();
                        var D = C(R);
                        return {unsubscribe: D}
                    }
                }, T[af.default] = function () {
                    return this
                }, T
            }

            return p({type: sf.INIT}), n = {
                dispatch: p,
                subscribe: g,
                getState: E,
                replaceReducer: A
            }, n[af.default] = S, n
        }
    });
    var Po = c(No => {
        "use strict";
        No.__esModule = !0;
        No.default = cO;

        function cO(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {
            }
        }
    });
    var df = c(qo => {
        "use strict";
        qo.__esModule = !0;
        qo.default = gO;
        var lf = Lo(), lO = wo(), pk = ff(lO), fO = Po(), gk = ff(fO);

        function ff(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function dO(e, t) {
            var r = t && t.type, n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function pO(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t], n = r(void 0, {type: lf.ActionTypes.INIT});
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {type: i}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + lf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function gO(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                pO(r)
            } catch (u) {
                s = u
            }
            return function () {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0], E = arguments[1];
                if (s) throw s;
                if (!1) var g;
                for (var p = !1, A = {}, S = 0; S < o.length; S++) {
                    var T = o[S], C = r[T], I = f[T], L = C(I, E);
                    if (typeof L > "u") {
                        var R = dO(T, E);
                        throw new Error(R)
                    }
                    A[T] = L, p = p || L !== I
                }
                return p ? A : f
            }
        }
    });
    var gf = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = hO;

        function pf(e, t) {
            return function () {
                return t(e.apply(void 0, arguments))
            }
        }

        function hO(e, t) {
            if (typeof e == "function") return pf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i], a = e[o];
                typeof a == "function" && (n[o] = pf(a, t))
            }
            return n
        }
    });
    var Do = c(Mo => {
        "use strict";
        Mo.__esModule = !0;
        Mo.default = vO;

        function vO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function (o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1], i = t.slice(0, -1);
            return function () {
                return i.reduceRight(function (o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var hf = c(Go => {
        "use strict";
        Go.__esModule = !0;
        var EO = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Go.default = bO;
        var yO = Do(), mO = _O(yO);

        function _O(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function bO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (n) {
                return function (i, o, a) {
                    var s = n(i, o, a), u = s.dispatch, f = [], E = {
                        getState: s.getState, dispatch: function (p) {
                            return u(p)
                        }
                    };
                    return f = t.map(function (g) {
                        return g(E)
                    }), u = mO.default.apply(void 0, f)(s.dispatch), EO({}, s, {dispatch: u})
                }
            }
        }
    });
    var Vo = c(Ve => {
        "use strict";
        Ve.__esModule = !0;
        Ve.compose = Ve.applyMiddleware = Ve.bindActionCreators = Ve.combineReducers = Ve.createStore = void 0;
        var TO = Lo(), IO = Ht(TO), OO = df(), AO = Ht(OO), xO = gf(), wO = Ht(xO), SO = hf(), CO = Ht(SO), RO = Do(),
            LO = Ht(RO), NO = Po(), mk = Ht(NO);

        function Ht(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Ve.createStore = IO.default;
        Ve.combineReducers = AO.default;
        Ve.bindActionCreators = wO.default;
        Ve.applyMiddleware = CO.default;
        Ve.compose = LO.default
    });
    var ze, Uo, nt, PO, qO, bn, FO, Bo = fe(() => {
        "use strict";
        ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Uo = {ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE"}, nt = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, PO = {X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS"}, qO = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, bn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, FO = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Pe, MO, Tn = fe(() => {
        "use strict";
        Pe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, MO = {ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT"}
    });
    var DO, vf = fe(() => {
        "use strict";
        DO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var GO, VO, UO, BO, kO, XO, WO, ko, Ef = fe(() => {
        "use strict";
        Tn();
        ({
            TRANSFORM_MOVE: GO,
            TRANSFORM_SCALE: VO,
            TRANSFORM_ROTATE: UO,
            TRANSFORM_SKEW: BO,
            STYLE_SIZE: kO,
            STYLE_FILTER: XO,
            STYLE_FONT_VARIATION: WO
        } = Pe), ko = {[GO]: !0, [VO]: !0, [UO]: !0, [BO]: !0, [kO]: !0, [XO]: !0, [WO]: !0}
    });
    var ye = {};
    Ne(ye, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => sA,
        IX2_ANIMATION_FRAME_CHANGED: () => tA,
        IX2_CLEAR_REQUESTED: () => ZO,
        IX2_ELEMENT_STATE_CHANGED: () => aA,
        IX2_EVENT_LISTENER_ADDED: () => JO,
        IX2_EVENT_STATE_CHANGED: () => eA,
        IX2_INSTANCE_ADDED: () => nA,
        IX2_INSTANCE_REMOVED: () => oA,
        IX2_INSTANCE_STARTED: () => iA,
        IX2_MEDIA_QUERIES_DEFINED: () => cA,
        IX2_PARAMETER_CHANGED: () => rA,
        IX2_PLAYBACK_REQUESTED: () => $O,
        IX2_PREVIEW_REQUESTED: () => YO,
        IX2_RAW_DATA_IMPORTED: () => HO,
        IX2_SESSION_INITIALIZED: () => jO,
        IX2_SESSION_STARTED: () => zO,
        IX2_SESSION_STOPPED: () => KO,
        IX2_STOP_REQUESTED: () => QO,
        IX2_TEST_FRAME_RENDERED: () => lA,
        IX2_VIEWPORT_WIDTH_CHANGED: () => uA
    });
    var HO, jO, zO, KO, YO, $O, QO, ZO, JO, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, yf = fe(() => {
        "use strict";
        HO = "IX2_RAW_DATA_IMPORTED", jO = "IX2_SESSION_INITIALIZED", zO = "IX2_SESSION_STARTED", KO = "IX2_SESSION_STOPPED", YO = "IX2_PREVIEW_REQUESTED", $O = "IX2_PLAYBACK_REQUESTED", QO = "IX2_STOP_REQUESTED", ZO = "IX2_CLEAR_REQUESTED", JO = "IX2_EVENT_LISTENER_ADDED", eA = "IX2_EVENT_STATE_CHANGED", tA = "IX2_ANIMATION_FRAME_CHANGED", rA = "IX2_PARAMETER_CHANGED", nA = "IX2_INSTANCE_ADDED", iA = "IX2_INSTANCE_STARTED", oA = "IX2_INSTANCE_REMOVED", aA = "IX2_ELEMENT_STATE_CHANGED", sA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", uA = "IX2_VIEWPORT_WIDTH_CHANGED", cA = "IX2_MEDIA_QUERIES_DEFINED", lA = "IX2_TEST_FRAME_RENDERED"
    });
    var Oe = {};
    Ne(Oe, {
        ABSTRACT_NODE: () => ux,
        AUTO: () => QA,
        BACKGROUND: () => HA,
        BACKGROUND_COLOR: () => WA,
        BAR_DELIMITER: () => ex,
        BORDER_COLOR: () => jA,
        BOUNDARY_SELECTOR: () => hA,
        CHILDREN: () => tx,
        COLON_DELIMITER: () => JA,
        COLOR: () => zA,
        COMMA_DELIMITER: () => ZA,
        CONFIG_UNIT: () => IA,
        CONFIG_VALUE: () => mA,
        CONFIG_X_UNIT: () => _A,
        CONFIG_X_VALUE: () => vA,
        CONFIG_Y_UNIT: () => bA,
        CONFIG_Y_VALUE: () => EA,
        CONFIG_Z_UNIT: () => TA,
        CONFIG_Z_VALUE: () => yA,
        DISPLAY: () => KA,
        FILTER: () => UA,
        FLEX: () => YA,
        FONT_VARIATION_SETTINGS: () => BA,
        HEIGHT: () => XA,
        HTML_ELEMENT: () => ax,
        IMMEDIATE_CHILDREN: () => rx,
        IX2_ID_DELIMITER: () => fA,
        OPACITY: () => VA,
        PARENT: () => ix,
        PLAIN_OBJECT: () => sx,
        PRESERVE_3D: () => ox,
        RENDER_GENERAL: () => lx,
        RENDER_PLUGIN: () => dx,
        RENDER_STYLE: () => fx,
        RENDER_TRANSFORM: () => cx,
        ROTATE_X: () => PA,
        ROTATE_Y: () => qA,
        ROTATE_Z: () => FA,
        SCALE_3D: () => NA,
        SCALE_X: () => CA,
        SCALE_Y: () => RA,
        SCALE_Z: () => LA,
        SIBLINGS: () => nx,
        SKEW: () => MA,
        SKEW_X: () => DA,
        SKEW_Y: () => GA,
        TRANSFORM: () => OA,
        TRANSLATE_3D: () => SA,
        TRANSLATE_X: () => AA,
        TRANSLATE_Y: () => xA,
        TRANSLATE_Z: () => wA,
        WF_PAGE: () => dA,
        WIDTH: () => kA,
        WILL_CHANGE: () => $A,
        W_MOD_IX: () => gA,
        W_MOD_JS: () => pA
    });
    var fA, dA, pA, gA, hA, vA, EA, yA, mA, _A, bA, TA, IA, OA, AA, xA, wA, SA, CA, RA, LA, NA, PA, qA, FA, MA, DA, GA,
        VA, UA, BA, kA, XA, WA, HA, jA, zA, KA, YA, $A, QA, ZA, JA, ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx,
        mf = fe(() => {
            "use strict";
            fA = "|", dA = "data-wf-page", pA = "w-mod-js", gA = "w-mod-ix", hA = ".w-dyn-item", vA = "xValue", EA = "yValue", yA = "zValue", mA = "value", _A = "xUnit", bA = "yUnit", TA = "zUnit", IA = "unit", OA = "transform", AA = "translateX", xA = "translateY", wA = "translateZ", SA = "translate3d", CA = "scaleX", RA = "scaleY", LA = "scaleZ", NA = "scale3d", PA = "rotateX", qA = "rotateY", FA = "rotateZ", MA = "skew", DA = "skewX", GA = "skewY", VA = "opacity", UA = "filter", BA = "font-variation-settings", kA = "width", XA = "height", WA = "backgroundColor", HA = "background", jA = "borderColor", zA = "color", KA = "display", YA = "flex", $A = "willChange", QA = "AUTO", ZA = ",", JA = ":", ex = "|", tx = "CHILDREN", rx = "IMMEDIATE_CHILDREN", nx = "SIBLINGS", ix = "PARENT", ox = "preserve-3d", ax = "HTML_ELEMENT", sx = "PLAIN_OBJECT", ux = "ABSTRACT_NODE", cx = "RENDER_TRANSFORM", lx = "RENDER_GENERAL", fx = "RENDER_STYLE", dx = "RENDER_PLUGIN"
        });
    var _f = {};
    Ne(_f, {
        ActionAppliesTo: () => MO,
        ActionTypeConsts: () => Pe,
        EventAppliesTo: () => Uo,
        EventBasedOn: () => nt,
        EventContinuousMouseAxes: () => PO,
        EventLimitAffectedElements: () => qO,
        EventTypeConsts: () => ze,
        IX2EngineActionTypes: () => ye,
        IX2EngineConstants: () => Oe,
        InteractionTypeConsts: () => DO,
        QuickEffectDirectionConsts: () => FO,
        QuickEffectIds: () => bn,
        ReducedMotionTypes: () => ko
    });
    var qe = fe(() => {
        "use strict";
        Bo();
        Tn();
        vf();
        Ef();
        yf();
        mf();
        Tn();
        Bo()
    });
    var px, bf, Tf = fe(() => {
        "use strict";
        qe();
        ({IX2_RAW_DATA_IMPORTED: px} = ye), bf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case px:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var jt = c(he => {
        "use strict";
        Object.defineProperty(he, "__esModule", {value: !0});
        var gx = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e
        } : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        he.clone = On;
        he.addLast = Af;
        he.addFirst = xf;
        he.removeLast = wf;
        he.removeFirst = Sf;
        he.insert = Cf;
        he.removeAt = Rf;
        he.replaceAt = Lf;
        he.getIn = An;
        he.set = xn;
        he.setIn = wn;
        he.update = Pf;
        he.updateIn = qf;
        he.merge = Ff;
        he.mergeDeep = Mf;
        he.mergeIn = Df;
        he.omit = Gf;
        he.addDefaults = Vf;
        var If = "INVALID_ARGS";

        function Of(e) {
            throw new Error(e)
        }

        function Xo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }

        var hx = {}.hasOwnProperty;

        function On(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Xo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Fe(e, t, r) {
            var n = r;
            n == null && Of(If);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var f = a[u];
                if (f != null) {
                    var E = Xo(f);
                    if (E.length) for (var g = 0; g <= E.length; g++) {
                        var p = E[g];
                        if (!(e && n[p] !== void 0)) {
                            var A = f[p];
                            t && In(n[p]) && In(A) && (A = Fe(e, t, n[p], A)), !(A === void 0 || A === n[p]) && (i || (i = !0, n = On(n)), n[p] = A)
                        }
                    }
                }
            }
            return n
        }

        function In(e) {
            var t = typeof e > "u" ? "undefined" : gx(e);
            return e != null && (t === "object" || t === "function")
        }

        function Af(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function xf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function wf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Sf(e) {
            return e.length ? e.slice(1) : e
        }

        function Cf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Rf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Lf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function An(e, t) {
            if (!Array.isArray(t) && Of(If), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i], r === void 0) return r
                }
                return r
            }
        }

        function xn(e, t, r) {
            var n = typeof t == "number" ? [] : {}, i = e ?? n;
            if (i[t] === r) return i;
            var o = On(i);
            return o[t] = r, o
        }

        function Nf(e, t, r, n) {
            var i = void 0, o = t[n];
            if (n === t.length - 1) i = r; else {
                var a = In(e) && In(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Nf(a, t, r, n + 1)
            }
            return xn(e, o, i)
        }

        function wn(e, t, r) {
            return t.length ? Nf(e, t, r, 0) : r
        }

        function Pf(e, t, r) {
            var n = e?.[t], i = r(n);
            return xn(e, t, i)
        }

        function qf(e, t, r) {
            var n = An(e, t), i = r(n);
            return wn(e, t, i)
        }

        function Ff(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Fe.call.apply(Fe, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Fe(!1, !1, e, t, r, n, i, o)
        }

        function Mf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Fe.call.apply(Fe, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Fe(!1, !0, e, t, r, n, i, o)
        }

        function Df(e, t, r, n, i, o, a) {
            var s = An(e, t);
            s == null && (s = {});
            for (var u = void 0, f = arguments.length, E = Array(f > 7 ? f - 7 : 0), g = 7; g < f; g++) E[g - 7] = arguments[g];
            return E.length ? u = Fe.call.apply(Fe, [null, !1, !1, s, r, n, i, o, a].concat(E)) : u = Fe(!1, !1, s, r, n, i, o, a), wn(e, t, u)
        }

        function Gf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++) if (hx.call(e, r[i])) {
                n = !0;
                break
            }
            if (!n) return e;
            for (var o = {}, a = Xo(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Vf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Fe.call.apply(Fe, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Fe(!0, !1, e, t, r, n, i, o)
        }

        var vx = {
            clone: On,
            addLast: Af,
            addFirst: xf,
            removeLast: wf,
            removeFirst: Sf,
            insert: Cf,
            removeAt: Rf,
            replaceAt: Lf,
            getIn: An,
            set: xn,
            setIn: wn,
            update: Pf,
            updateIn: qf,
            merge: Ff,
            mergeDeep: Mf,
            mergeIn: Df,
            omit: Gf,
            addDefaults: Vf
        };
        he.default = vx
    });
    var Bf, Ex, yx, mx, _x, bx, Uf, kf, Xf = fe(() => {
        "use strict";
        qe();
        Bf = ie(jt()), {
            IX2_PREVIEW_REQUESTED: Ex,
            IX2_PLAYBACK_REQUESTED: yx,
            IX2_STOP_REQUESTED: mx,
            IX2_CLEAR_REQUESTED: _x
        } = ye, bx = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Uf = Object.create(null, {
            [Ex]: {value: "preview"},
            [yx]: {value: "playback"},
            [mx]: {value: "stop"},
            [_x]: {value: "clear"}
        }), kf = (e = bx, t) => {
            if (t.type in Uf) {
                let r = [Uf[t.type]];
                return (0, Bf.setIn)(e, [r], {...t.payload})
            }
            return e
        }
    });
    var Se, Tx, Ix, Ox, Ax, xx, wx, Sx, Cx, Rx, Lx, Wf, Nx, Hf, jf = fe(() => {
        "use strict";
        qe();
        Se = ie(jt()), {
            IX2_SESSION_INITIALIZED: Tx,
            IX2_SESSION_STARTED: Ix,
            IX2_TEST_FRAME_RENDERED: Ox,
            IX2_SESSION_STOPPED: Ax,
            IX2_EVENT_LISTENER_ADDED: xx,
            IX2_EVENT_STATE_CHANGED: wx,
            IX2_ANIMATION_FRAME_CHANGED: Sx,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Cx,
            IX2_VIEWPORT_WIDTH_CHANGED: Rx,
            IX2_MEDIA_QUERIES_DEFINED: Lx
        } = ye, Wf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, Nx = 20, Hf = (e = Wf, t) => {
            switch (t.type) {
                case Tx: {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0, Se.merge)(e, {hasBoundaryNodes: r, reducedMotion: n})
                }
                case Ix:
                    return (0, Se.set)(e, "active", !0);
                case Ox: {
                    let {payload: {step: r = Nx}} = t;
                    return (0, Se.set)(e, "tick", e.tick + r)
                }
                case Ax:
                    return Wf;
                case Sx: {
                    let {payload: {now: r}} = t;
                    return (0, Se.set)(e, "tick", r)
                }
                case xx: {
                    let r = (0, Se.addLast)(e.eventListeners, t.payload);
                    return (0, Se.set)(e, "eventListeners", r)
                }
                case wx: {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0, Se.setIn)(e, ["eventState", r], n)
                }
                case Cx: {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0, Se.setIn)(e, ["playbackState", r], n)
                }
                case Rx: {
                    let {width: r, mediaQueries: n} = t.payload, i = n.length, o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: f} = n[a];
                        if (r >= u && r <= f) {
                            o = s;
                            break
                        }
                    }
                    return (0, Se.merge)(e, {viewportWidth: r, mediaQueryKey: o})
                }
                case Lx:
                    return (0, Se.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var Kf = c((Vk, zf) => {
        function Px() {
            this.__data__ = [], this.size = 0
        }

        zf.exports = Px
    });
    var Sn = c((Uk, Yf) => {
        function qx(e, t) {
            return e === t || e !== e && t !== t
        }

        Yf.exports = qx
    });
    var Sr = c((Bk, $f) => {
        var Fx = Sn();

        function Mx(e, t) {
            for (var r = e.length; r--;) if (Fx(e[r][0], t)) return r;
            return -1
        }

        $f.exports = Mx
    });
    var Zf = c((kk, Qf) => {
        var Dx = Sr(), Gx = Array.prototype, Vx = Gx.splice;

        function Ux(e) {
            var t = this.__data__, r = Dx(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : Vx.call(t, r, 1), --this.size, !0
        }

        Qf.exports = Ux
    });
    var ed = c((Xk, Jf) => {
        var Bx = Sr();

        function kx(e) {
            var t = this.__data__, r = Bx(t, e);
            return r < 0 ? void 0 : t[r][1]
        }

        Jf.exports = kx
    });
    var rd = c((Wk, td) => {
        var Xx = Sr();

        function Wx(e) {
            return Xx(this.__data__, e) > -1
        }

        td.exports = Wx
    });
    var id = c((Hk, nd) => {
        var Hx = Sr();

        function jx(e, t) {
            var r = this.__data__, n = Hx(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }

        nd.exports = jx
    });
    var Cr = c((jk, od) => {
        var zx = Kf(), Kx = Zf(), Yx = ed(), $x = rd(), Qx = id();

        function zt(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        zt.prototype.clear = zx;
        zt.prototype.delete = Kx;
        zt.prototype.get = Yx;
        zt.prototype.has = $x;
        zt.prototype.set = Qx;
        od.exports = zt
    });
    var sd = c((zk, ad) => {
        var Zx = Cr();

        function Jx() {
            this.__data__ = new Zx, this.size = 0
        }

        ad.exports = Jx
    });
    var cd = c((Kk, ud) => {
        function ew(e) {
            var t = this.__data__, r = t.delete(e);
            return this.size = t.size, r
        }

        ud.exports = ew
    });
    var fd = c((Yk, ld) => {
        function tw(e) {
            return this.__data__.get(e)
        }

        ld.exports = tw
    });
    var pd = c(($k, dd) => {
        function rw(e) {
            return this.__data__.has(e)
        }

        dd.exports = rw
    });
    var it = c((Qk, gd) => {
        function nw(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }

        gd.exports = nw
    });
    var Wo = c((Zk, hd) => {
        var iw = _t(), ow = it(), aw = "[object AsyncFunction]", sw = "[object Function]",
            uw = "[object GeneratorFunction]", cw = "[object Proxy]";

        function lw(e) {
            if (!ow(e)) return !1;
            var t = iw(e);
            return t == sw || t == uw || t == aw || t == cw
        }

        hd.exports = lw
    });
    var Ed = c((Jk, vd) => {
        var fw = je(), dw = fw["__core-js_shared__"];
        vd.exports = dw
    });
    var _d = c((eX, md) => {
        var Ho = Ed(), yd = function () {
            var e = /[^.]+$/.exec(Ho && Ho.keys && Ho.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

        function pw(e) {
            return !!yd && yd in e
        }

        md.exports = pw
    });
    var jo = c((tX, bd) => {
        var gw = Function.prototype, hw = gw.toString;

        function vw(e) {
            if (e != null) {
                try {
                    return hw.call(e)
                } catch {
                }
                try {
                    return e + ""
                } catch {
                }
            }
            return ""
        }

        bd.exports = vw
    });
    var Id = c((rX, Td) => {
        var Ew = Wo(), yw = _d(), mw = it(), _w = jo(), bw = /[\\^$.*+?()[\]{}|]/g, Tw = /^\[object .+?Constructor\]$/,
            Iw = Function.prototype, Ow = Object.prototype, Aw = Iw.toString, xw = Ow.hasOwnProperty,
            ww = RegExp("^" + Aw.call(xw).replace(bw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Sw(e) {
            if (!mw(e) || yw(e)) return !1;
            var t = Ew(e) ? ww : Tw;
            return t.test(_w(e))
        }

        Td.exports = Sw
    });
    var Ad = c((nX, Od) => {
        function Cw(e, t) {
            return e?.[t]
        }

        Od.exports = Cw
    });
    var bt = c((iX, xd) => {
        var Rw = Id(), Lw = Ad();

        function Nw(e, t) {
            var r = Lw(e, t);
            return Rw(r) ? r : void 0
        }

        xd.exports = Nw
    });
    var Cn = c((oX, wd) => {
        var Pw = bt(), qw = je(), Fw = Pw(qw, "Map");
        wd.exports = Fw
    });
    var Rr = c((aX, Sd) => {
        var Mw = bt(), Dw = Mw(Object, "create");
        Sd.exports = Dw
    });
    var Ld = c((sX, Rd) => {
        var Cd = Rr();

        function Gw() {
            this.__data__ = Cd ? Cd(null) : {}, this.size = 0
        }

        Rd.exports = Gw
    });
    var Pd = c((uX, Nd) => {
        function Vw(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }

        Nd.exports = Vw
    });
    var Fd = c((cX, qd) => {
        var Uw = Rr(), Bw = "__lodash_hash_undefined__", kw = Object.prototype, Xw = kw.hasOwnProperty;

        function Ww(e) {
            var t = this.__data__;
            if (Uw) {
                var r = t[e];
                return r === Bw ? void 0 : r
            }
            return Xw.call(t, e) ? t[e] : void 0
        }

        qd.exports = Ww
    });
    var Dd = c((lX, Md) => {
        var Hw = Rr(), jw = Object.prototype, zw = jw.hasOwnProperty;

        function Kw(e) {
            var t = this.__data__;
            return Hw ? t[e] !== void 0 : zw.call(t, e)
        }

        Md.exports = Kw
    });
    var Vd = c((fX, Gd) => {
        var Yw = Rr(), $w = "__lodash_hash_undefined__";

        function Qw(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = Yw && t === void 0 ? $w : t, this
        }

        Gd.exports = Qw
    });
    var Bd = c((dX, Ud) => {
        var Zw = Ld(), Jw = Pd(), eS = Fd(), tS = Dd(), rS = Vd();

        function Kt(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        Kt.prototype.clear = Zw;
        Kt.prototype.delete = Jw;
        Kt.prototype.get = eS;
        Kt.prototype.has = tS;
        Kt.prototype.set = rS;
        Ud.exports = Kt
    });
    var Wd = c((pX, Xd) => {
        var kd = Bd(), nS = Cr(), iS = Cn();

        function oS() {
            this.size = 0, this.__data__ = {hash: new kd, map: new (iS || nS), string: new kd}
        }

        Xd.exports = oS
    });
    var jd = c((gX, Hd) => {
        function aS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }

        Hd.exports = aS
    });
    var Lr = c((hX, zd) => {
        var sS = jd();

        function uS(e, t) {
            var r = e.__data__;
            return sS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }

        zd.exports = uS
    });
    var Yd = c((vX, Kd) => {
        var cS = Lr();

        function lS(e) {
            var t = cS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }

        Kd.exports = lS
    });
    var Qd = c((EX, $d) => {
        var fS = Lr();

        function dS(e) {
            return fS(this, e).get(e)
        }

        $d.exports = dS
    });
    var Jd = c((yX, Zd) => {
        var pS = Lr();

        function gS(e) {
            return pS(this, e).has(e)
        }

        Zd.exports = gS
    });
    var tp = c((mX, ep) => {
        var hS = Lr();

        function vS(e, t) {
            var r = hS(this, e), n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }

        ep.exports = vS
    });
    var Rn = c((_X, rp) => {
        var ES = Wd(), yS = Yd(), mS = Qd(), _S = Jd(), bS = tp();

        function Yt(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        Yt.prototype.clear = ES;
        Yt.prototype.delete = yS;
        Yt.prototype.get = mS;
        Yt.prototype.has = _S;
        Yt.prototype.set = bS;
        rp.exports = Yt
    });
    var ip = c((bX, np) => {
        var TS = Cr(), IS = Cn(), OS = Rn(), AS = 200;

        function xS(e, t) {
            var r = this.__data__;
            if (r instanceof TS) {
                var n = r.__data__;
                if (!IS || n.length < AS - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new OS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }

        np.exports = xS
    });
    var zo = c((TX, op) => {
        var wS = Cr(), SS = sd(), CS = cd(), RS = fd(), LS = pd(), NS = ip();

        function $t(e) {
            var t = this.__data__ = new wS(e);
            this.size = t.size
        }

        $t.prototype.clear = SS;
        $t.prototype.delete = CS;
        $t.prototype.get = RS;
        $t.prototype.has = LS;
        $t.prototype.set = NS;
        op.exports = $t
    });
    var sp = c((IX, ap) => {
        var PS = "__lodash_hash_undefined__";

        function qS(e) {
            return this.__data__.set(e, PS), this
        }

        ap.exports = qS
    });
    var cp = c((OX, up) => {
        function FS(e) {
            return this.__data__.has(e)
        }

        up.exports = FS
    });
    var fp = c((AX, lp) => {
        var MS = Rn(), DS = sp(), GS = cp();

        function Ln(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.__data__ = new MS; ++t < r;) this.add(e[t])
        }

        Ln.prototype.add = Ln.prototype.push = DS;
        Ln.prototype.has = GS;
        lp.exports = Ln
    });
    var pp = c((xX, dp) => {
        function VS(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) if (t(e[r], r, e)) return !0;
            return !1
        }

        dp.exports = VS
    });
    var hp = c((wX, gp) => {
        function US(e, t) {
            return e.has(t)
        }

        gp.exports = US
    });
    var Ko = c((SX, vp) => {
        var BS = fp(), kS = pp(), XS = hp(), WS = 1, HS = 2;

        function jS(e, t, r, n, i, o) {
            var a = r & WS, s = e.length, u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var f = o.get(e), E = o.get(t);
            if (f && E) return f == t && E == e;
            var g = -1, p = !0, A = r & HS ? new BS : void 0;
            for (o.set(e, t), o.set(t, e); ++g < s;) {
                var S = e[g], T = t[g];
                if (n) var C = a ? n(T, S, g, t, e, o) : n(S, T, g, e, t, o);
                if (C !== void 0) {
                    if (C) continue;
                    p = !1;
                    break
                }
                if (A) {
                    if (!kS(t, function (I, L) {
                        if (!XS(A, L) && (S === I || i(S, I, r, n, o))) return A.push(L)
                    })) {
                        p = !1;
                        break
                    }
                } else if (!(S === T || i(S, T, r, n, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), p
        }

        vp.exports = jS
    });
    var yp = c((CX, Ep) => {
        var zS = je(), KS = zS.Uint8Array;
        Ep.exports = KS
    });
    var _p = c((RX, mp) => {
        function YS(e) {
            var t = -1, r = Array(e.size);
            return e.forEach(function (n, i) {
                r[++t] = [i, n]
            }), r
        }

        mp.exports = YS
    });
    var Tp = c((LX, bp) => {
        function $S(e) {
            var t = -1, r = Array(e.size);
            return e.forEach(function (n) {
                r[++t] = n
            }), r
        }

        bp.exports = $S
    });
    var wp = c((NX, xp) => {
        var Ip = Xt(), Op = yp(), QS = Sn(), ZS = Ko(), JS = _p(), eC = Tp(), tC = 1, rC = 2, nC = "[object Boolean]",
            iC = "[object Date]", oC = "[object Error]", aC = "[object Map]", sC = "[object Number]",
            uC = "[object RegExp]", cC = "[object Set]", lC = "[object String]", fC = "[object Symbol]",
            dC = "[object ArrayBuffer]", pC = "[object DataView]", Ap = Ip ? Ip.prototype : void 0,
            Yo = Ap ? Ap.valueOf : void 0;

        function gC(e, t, r, n, i, o, a) {
            switch (r) {
                case pC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case dC:
                    return !(e.byteLength != t.byteLength || !o(new Op(e), new Op(t)));
                case nC:
                case iC:
                case sC:
                    return QS(+e, +t);
                case oC:
                    return e.name == t.name && e.message == t.message;
                case uC:
                case lC:
                    return e == t + "";
                case aC:
                    var s = JS;
                case cC:
                    var u = n & tC;
                    if (s || (s = eC), e.size != t.size && !u) return !1;
                    var f = a.get(e);
                    if (f) return f == t;
                    n |= rC, a.set(e, t);
                    var E = ZS(s(e), s(t), n, i, o, a);
                    return a.delete(e), E;
                case fC:
                    if (Yo) return Yo.call(e) == Yo.call(t)
            }
            return !1
        }

        xp.exports = gC
    });
    var Nn = c((PX, Sp) => {
        function hC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }

        Sp.exports = hC
    });
    var _e = c((qX, Cp) => {
        var vC = Array.isArray;
        Cp.exports = vC
    });
    var $o = c((FX, Rp) => {
        var EC = Nn(), yC = _e();

        function mC(e, t, r) {
            var n = t(e);
            return yC(e) ? n : EC(n, r(e))
        }

        Rp.exports = mC
    });
    var Np = c((MX, Lp) => {
        function _C(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }

        Lp.exports = _C
    });
    var Qo = c((DX, Pp) => {
        function bC() {
            return []
        }

        Pp.exports = bC
    });
    var Zo = c((GX, Fp) => {
        var TC = Np(), IC = Qo(), OC = Object.prototype, AC = OC.propertyIsEnumerable,
            qp = Object.getOwnPropertySymbols, xC = qp ? function (e) {
                return e == null ? [] : (e = Object(e), TC(qp(e), function (t) {
                    return AC.call(e, t)
                }))
            } : IC;
        Fp.exports = xC
    });
    var Dp = c((VX, Mp) => {
        function wC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }

        Mp.exports = wC
    });
    var Vp = c((UX, Gp) => {
        var SC = _t(), CC = ft(), RC = "[object Arguments]";

        function LC(e) {
            return CC(e) && SC(e) == RC
        }

        Gp.exports = LC
    });
    var Nr = c((BX, kp) => {
        var Up = Vp(), NC = ft(), Bp = Object.prototype, PC = Bp.hasOwnProperty, qC = Bp.propertyIsEnumerable,
            FC = Up(function () {
                return arguments
            }()) ? Up : function (e) {
                return NC(e) && PC.call(e, "callee") && !qC.call(e, "callee")
            };
        kp.exports = FC
    });
    var Wp = c((kX, Xp) => {
        function MC() {
            return !1
        }

        Xp.exports = MC
    });
    var Pn = c((Pr, Qt) => {
        var DC = je(), GC = Wp(), zp = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
            Hp = zp && typeof Qt == "object" && Qt && !Qt.nodeType && Qt, VC = Hp && Hp.exports === zp,
            jp = VC ? DC.Buffer : void 0, UC = jp ? jp.isBuffer : void 0, BC = UC || GC;
        Qt.exports = BC
    });
    var qn = c((XX, Kp) => {
        var kC = 9007199254740991, XC = /^(?:0|[1-9]\d*)$/;

        function WC(e, t) {
            var r = typeof e;
            return t = t ?? kC, !!t && (r == "number" || r != "symbol" && XC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        Kp.exports = WC
    });
    var Fn = c((WX, Yp) => {
        var HC = 9007199254740991;

        function jC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= HC
        }

        Yp.exports = jC
    });
    var Qp = c((HX, $p) => {
        var zC = _t(), KC = Fn(), YC = ft(), $C = "[object Arguments]", QC = "[object Array]", ZC = "[object Boolean]",
            JC = "[object Date]", eR = "[object Error]", tR = "[object Function]", rR = "[object Map]",
            nR = "[object Number]", iR = "[object Object]", oR = "[object RegExp]", aR = "[object Set]",
            sR = "[object String]", uR = "[object WeakMap]", cR = "[object ArrayBuffer]", lR = "[object DataView]",
            fR = "[object Float32Array]", dR = "[object Float64Array]", pR = "[object Int8Array]",
            gR = "[object Int16Array]", hR = "[object Int32Array]", vR = "[object Uint8Array]",
            ER = "[object Uint8ClampedArray]", yR = "[object Uint16Array]", mR = "[object Uint32Array]", le = {};
        le[fR] = le[dR] = le[pR] = le[gR] = le[hR] = le[vR] = le[ER] = le[yR] = le[mR] = !0;
        le[$C] = le[QC] = le[cR] = le[ZC] = le[lR] = le[JC] = le[eR] = le[tR] = le[rR] = le[nR] = le[iR] = le[oR] = le[aR] = le[sR] = le[uR] = !1;

        function _R(e) {
            return YC(e) && KC(e.length) && !!le[zC(e)]
        }

        $p.exports = _R
    });
    var Jp = c((jX, Zp) => {
        function bR(e) {
            return function (t) {
                return e(t)
            }
        }

        Zp.exports = bR
    });
    var tg = c((qr, Zt) => {
        var TR = Oo(), eg = typeof qr == "object" && qr && !qr.nodeType && qr,
            Fr = eg && typeof Zt == "object" && Zt && !Zt.nodeType && Zt, IR = Fr && Fr.exports === eg,
            Jo = IR && TR.process, OR = function () {
                try {
                    var e = Fr && Fr.require && Fr.require("util").types;
                    return e || Jo && Jo.binding && Jo.binding("util")
                } catch {
                }
            }();
        Zt.exports = OR
    });
    var Mn = c((zX, ig) => {
        var AR = Qp(), xR = Jp(), rg = tg(), ng = rg && rg.isTypedArray, wR = ng ? xR(ng) : AR;
        ig.exports = wR
    });
    var ea = c((KX, og) => {
        var SR = Dp(), CR = Nr(), RR = _e(), LR = Pn(), NR = qn(), PR = Mn(), qR = Object.prototype,
            FR = qR.hasOwnProperty;

        function MR(e, t) {
            var r = RR(e), n = !r && CR(e), i = !r && !n && LR(e), o = !r && !n && !i && PR(e), a = r || n || i || o,
                s = a ? SR(e.length, String) : [], u = s.length;
            for (var f in e) (t || FR.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || NR(f, u))) && s.push(f);
            return s
        }

        og.exports = MR
    });
    var Dn = c((YX, ag) => {
        var DR = Object.prototype;

        function GR(e) {
            var t = e && e.constructor, r = typeof t == "function" && t.prototype || DR;
            return e === r
        }

        ag.exports = GR
    });
    var ug = c(($X, sg) => {
        var VR = Ao(), UR = VR(Object.keys, Object);
        sg.exports = UR
    });
    var Gn = c((QX, cg) => {
        var BR = Dn(), kR = ug(), XR = Object.prototype, WR = XR.hasOwnProperty;

        function HR(e) {
            if (!BR(e)) return kR(e);
            var t = [];
            for (var r in Object(e)) WR.call(e, r) && r != "constructor" && t.push(r);
            return t
        }

        cg.exports = HR
    });
    var Rt = c((ZX, lg) => {
        var jR = Wo(), zR = Fn();

        function KR(e) {
            return e != null && zR(e.length) && !jR(e)
        }

        lg.exports = KR
    });
    var Mr = c((JX, fg) => {
        var YR = ea(), $R = Gn(), QR = Rt();

        function ZR(e) {
            return QR(e) ? YR(e) : $R(e)
        }

        fg.exports = ZR
    });
    var pg = c((eW, dg) => {
        var JR = $o(), eL = Zo(), tL = Mr();

        function rL(e) {
            return JR(e, tL, eL)
        }

        dg.exports = rL
    });
    var vg = c((tW, hg) => {
        var gg = pg(), nL = 1, iL = Object.prototype, oL = iL.hasOwnProperty;

        function aL(e, t, r, n, i, o) {
            var a = r & nL, s = gg(e), u = s.length, f = gg(t), E = f.length;
            if (u != E && !a) return !1;
            for (var g = u; g--;) {
                var p = s[g];
                if (!(a ? p in t : oL.call(t, p))) return !1
            }
            var A = o.get(e), S = o.get(t);
            if (A && S) return A == t && S == e;
            var T = !0;
            o.set(e, t), o.set(t, e);
            for (var C = a; ++g < u;) {
                p = s[g];
                var I = e[p], L = t[p];
                if (n) var R = a ? n(L, I, p, t, e, o) : n(I, L, p, e, t, o);
                if (!(R === void 0 ? I === L || i(I, L, r, n, o) : R)) {
                    T = !1;
                    break
                }
                C || (C = p == "constructor")
            }
            if (T && !C) {
                var D = e.constructor, M = t.constructor;
                D != M && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof M == "function" && M instanceof M) && (T = !1)
            }
            return o.delete(e), o.delete(t), T
        }

        hg.exports = aL
    });
    var yg = c((rW, Eg) => {
        var sL = bt(), uL = je(), cL = sL(uL, "DataView");
        Eg.exports = cL
    });
    var _g = c((nW, mg) => {
        var lL = bt(), fL = je(), dL = lL(fL, "Promise");
        mg.exports = dL
    });
    var Tg = c((iW, bg) => {
        var pL = bt(), gL = je(), hL = pL(gL, "Set");
        bg.exports = hL
    });
    var ta = c((oW, Ig) => {
        var vL = bt(), EL = je(), yL = vL(EL, "WeakMap");
        Ig.exports = yL
    });
    var Vn = c((aW, Rg) => {
        var ra = yg(), na = Cn(), ia = _g(), oa = Tg(), aa = ta(), Cg = _t(), Jt = jo(), Og = "[object Map]",
            mL = "[object Object]", Ag = "[object Promise]", xg = "[object Set]", wg = "[object WeakMap]",
            Sg = "[object DataView]", _L = Jt(ra), bL = Jt(na), TL = Jt(ia), IL = Jt(oa), OL = Jt(aa), Lt = Cg;
        (ra && Lt(new ra(new ArrayBuffer(1))) != Sg || na && Lt(new na) != Og || ia && Lt(ia.resolve()) != Ag || oa && Lt(new oa) != xg || aa && Lt(new aa) != wg) && (Lt = function (e) {
            var t = Cg(e), r = t == mL ? e.constructor : void 0, n = r ? Jt(r) : "";
            if (n) switch (n) {
                case _L:
                    return Sg;
                case bL:
                    return Og;
                case TL:
                    return Ag;
                case IL:
                    return xg;
                case OL:
                    return wg
            }
            return t
        });
        Rg.exports = Lt
    });
    var Gg = c((sW, Dg) => {
        var sa = zo(), AL = Ko(), xL = wp(), wL = vg(), Lg = Vn(), Ng = _e(), Pg = Pn(), SL = Mn(), CL = 1,
            qg = "[object Arguments]", Fg = "[object Array]", Un = "[object Object]", RL = Object.prototype,
            Mg = RL.hasOwnProperty;

        function LL(e, t, r, n, i, o) {
            var a = Ng(e), s = Ng(t), u = a ? Fg : Lg(e), f = s ? Fg : Lg(t);
            u = u == qg ? Un : u, f = f == qg ? Un : f;
            var E = u == Un, g = f == Un, p = u == f;
            if (p && Pg(e)) {
                if (!Pg(t)) return !1;
                a = !0, E = !1
            }
            if (p && !E) return o || (o = new sa), a || SL(e) ? AL(e, t, r, n, i, o) : xL(e, t, u, r, n, i, o);
            if (!(r & CL)) {
                var A = E && Mg.call(e, "__wrapped__"), S = g && Mg.call(t, "__wrapped__");
                if (A || S) {
                    var T = A ? e.value() : e, C = S ? t.value() : t;
                    return o || (o = new sa), i(T, C, r, n, o)
                }
            }
            return p ? (o || (o = new sa), wL(e, t, r, n, i, o)) : !1
        }

        Dg.exports = LL
    });
    var ua = c((uW, Bg) => {
        var NL = Gg(), Vg = ft();

        function Ug(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Vg(e) && !Vg(t) ? e !== e && t !== t : NL(e, t, r, n, Ug, i)
        }

        Bg.exports = Ug
    });
    var Xg = c((cW, kg) => {
        var PL = zo(), qL = ua(), FL = 1, ML = 2;

        function DL(e, t, r, n) {
            var i = r.length, o = i, a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0], f = e[u], E = s[1];
                if (a && s[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var g = new PL;
                    if (n) var p = n(f, E, u, e, t, g);
                    if (!(p === void 0 ? qL(E, f, FL | ML, n, g) : p)) return !1
                }
            }
            return !0
        }

        kg.exports = DL
    });
    var ca = c((lW, Wg) => {
        var GL = it();

        function VL(e) {
            return e === e && !GL(e)
        }

        Wg.exports = VL
    });
    var jg = c((fW, Hg) => {
        var UL = ca(), BL = Mr();

        function kL(e) {
            for (var t = BL(e), r = t.length; r--;) {
                var n = t[r], i = e[n];
                t[r] = [n, i, UL(i)]
            }
            return t
        }

        Hg.exports = kL
    });
    var la = c((dW, zg) => {
        function XL(e, t) {
            return function (r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }

        zg.exports = XL
    });
    var Yg = c((pW, Kg) => {
        var WL = Xg(), HL = jg(), jL = la();

        function zL(e) {
            var t = HL(e);
            return t.length == 1 && t[0][2] ? jL(t[0][0], t[0][1]) : function (r) {
                return r === e || WL(r, e, t)
            }
        }

        Kg.exports = zL
    });
    var Dr = c((gW, $g) => {
        var KL = _t(), YL = ft(), $L = "[object Symbol]";

        function QL(e) {
            return typeof e == "symbol" || YL(e) && KL(e) == $L
        }

        $g.exports = QL
    });
    var Bn = c((hW, Qg) => {
        var ZL = _e(), JL = Dr(), eN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tN = /^\w*$/;

        function rN(e, t) {
            if (ZL(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || JL(e) ? !0 : tN.test(e) || !eN.test(e) || t != null && e in Object(t)
        }

        Qg.exports = rN
    });
    var eh = c((vW, Jg) => {
        var Zg = Rn(), nN = "Expected a function";

        function fa(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(nN);
            var r = function () {
                var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new (fa.Cache || Zg), r
        }

        fa.Cache = Zg;
        Jg.exports = fa
    });
    var rh = c((EW, th) => {
        var iN = eh(), oN = 500;

        function aN(e) {
            var t = iN(e, function (n) {
                return r.size === oN && r.clear(), n
            }), r = t.cache;
            return t
        }

        th.exports = aN
    });
    var ih = c((yW, nh) => {
        var sN = rh(),
            uN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            cN = /\\(\\)?/g, lN = sN(function (e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(uN, function (r, n, i, o) {
                    t.push(i ? o.replace(cN, "$1") : n || r)
                }), t
            });
        nh.exports = lN
    });
    var da = c((mW, oh) => {
        function fN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }

        oh.exports = fN
    });
    var fh = c((_W, lh) => {
        var ah = Xt(), dN = da(), pN = _e(), gN = Dr(), hN = 1 / 0, sh = ah ? ah.prototype : void 0,
            uh = sh ? sh.toString : void 0;

        function ch(e) {
            if (typeof e == "string") return e;
            if (pN(e)) return dN(e, ch) + "";
            if (gN(e)) return uh ? uh.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -hN ? "-0" : t
        }

        lh.exports = ch
    });
    var ph = c((bW, dh) => {
        var vN = fh();

        function EN(e) {
            return e == null ? "" : vN(e)
        }

        dh.exports = EN
    });
    var Gr = c((TW, gh) => {
        var yN = _e(), mN = Bn(), _N = ih(), bN = ph();

        function TN(e, t) {
            return yN(e) ? e : mN(e, t) ? [e] : _N(bN(e))
        }

        gh.exports = TN
    });
    var er = c((IW, hh) => {
        var IN = Dr(), ON = 1 / 0;

        function AN(e) {
            if (typeof e == "string" || IN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -ON ? "-0" : t
        }

        hh.exports = AN
    });
    var kn = c((OW, vh) => {
        var xN = Gr(), wN = er();

        function SN(e, t) {
            t = xN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[wN(t[r++])];
            return r && r == n ? e : void 0
        }

        vh.exports = SN
    });
    var Xn = c((AW, Eh) => {
        var CN = kn();

        function RN(e, t, r) {
            var n = e == null ? void 0 : CN(e, t);
            return n === void 0 ? r : n
        }

        Eh.exports = RN
    });
    var mh = c((xW, yh) => {
        function LN(e, t) {
            return e != null && t in Object(e)
        }

        yh.exports = LN
    });
    var bh = c((wW, _h) => {
        var NN = Gr(), PN = Nr(), qN = _e(), FN = qn(), MN = Fn(), DN = er();

        function GN(e, t, r) {
            t = NN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = DN(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && MN(i) && FN(a, i) && (qN(e) || PN(e)))
        }

        _h.exports = GN
    });
    var Ih = c((SW, Th) => {
        var VN = mh(), UN = bh();

        function BN(e, t) {
            return e != null && UN(e, t, VN)
        }

        Th.exports = BN
    });
    var Ah = c((CW, Oh) => {
        var kN = ua(), XN = Xn(), WN = Ih(), HN = Bn(), jN = ca(), zN = la(), KN = er(), YN = 1, $N = 2;

        function QN(e, t) {
            return HN(e) && jN(t) ? zN(KN(e), t) : function (r) {
                var n = XN(r, e);
                return n === void 0 && n === t ? WN(r, e) : kN(t, n, YN | $N)
            }
        }

        Oh.exports = QN
    });
    var Wn = c((RW, xh) => {
        function ZN(e) {
            return e
        }

        xh.exports = ZN
    });
    var pa = c((LW, wh) => {
        function JN(e) {
            return function (t) {
                return t?.[e]
            }
        }

        wh.exports = JN
    });
    var Ch = c((NW, Sh) => {
        var eP = kn();

        function tP(e) {
            return function (t) {
                return eP(t, e)
            }
        }

        Sh.exports = tP
    });
    var Lh = c((PW, Rh) => {
        var rP = pa(), nP = Ch(), iP = Bn(), oP = er();

        function aP(e) {
            return iP(e) ? rP(oP(e)) : nP(e)
        }

        Rh.exports = aP
    });
    var Tt = c((qW, Nh) => {
        var sP = Yg(), uP = Ah(), cP = Wn(), lP = _e(), fP = Lh();

        function dP(e) {
            return typeof e == "function" ? e : e == null ? cP : typeof e == "object" ? lP(e) ? uP(e[0], e[1]) : sP(e) : fP(e)
        }

        Nh.exports = dP
    });
    var ga = c((FW, Ph) => {
        var pP = Tt(), gP = Rt(), hP = Mr();

        function vP(e) {
            return function (t, r, n) {
                var i = Object(t);
                if (!gP(t)) {
                    var o = pP(r, 3);
                    t = hP(t), r = function (s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }

        Ph.exports = vP
    });
    var ha = c((MW, qh) => {
        function EP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;) if (t(e[o], o, e)) return o;
            return -1
        }

        qh.exports = EP
    });
    var Mh = c((DW, Fh) => {
        var yP = /\s/;

        function mP(e) {
            for (var t = e.length; t-- && yP.test(e.charAt(t));) ;
            return t
        }

        Fh.exports = mP
    });
    var Gh = c((GW, Dh) => {
        var _P = Mh(), bP = /^\s+/;

        function TP(e) {
            return e && e.slice(0, _P(e) + 1).replace(bP, "")
        }

        Dh.exports = TP
    });
    var Hn = c((VW, Bh) => {
        var IP = Gh(), Vh = it(), OP = Dr(), Uh = 0 / 0, AP = /^[-+]0x[0-9a-f]+$/i, xP = /^0b[01]+$/i,
            wP = /^0o[0-7]+$/i, SP = parseInt;

        function CP(e) {
            if (typeof e == "number") return e;
            if (OP(e)) return Uh;
            if (Vh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Vh(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = IP(e);
            var r = xP.test(e);
            return r || wP.test(e) ? SP(e.slice(2), r ? 2 : 8) : AP.test(e) ? Uh : +e
        }

        Bh.exports = CP
    });
    var Wh = c((UW, Xh) => {
        var RP = Hn(), kh = 1 / 0, LP = 17976931348623157e292;

        function NP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = RP(e), e === kh || e === -kh) {
                var t = e < 0 ? -1 : 1;
                return t * LP
            }
            return e === e ? e : 0
        }

        Xh.exports = NP
    });
    var va = c((BW, Hh) => {
        var PP = Wh();

        function qP(e) {
            var t = PP(e), r = t % 1;
            return t === t ? r ? t - r : t : 0
        }

        Hh.exports = qP
    });
    var zh = c((kW, jh) => {
        var FP = ha(), MP = Tt(), DP = va(), GP = Math.max;

        function VP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : DP(r);
            return i < 0 && (i = GP(n + i, 0)), FP(e, MP(t, 3), i)
        }

        jh.exports = VP
    });
    var Ea = c((XW, Kh) => {
        var UP = ga(), BP = zh(), kP = UP(BP);
        Kh.exports = kP
    });
    var Qh = {};
    Ne(Qh, {
        ELEMENT_MATCHES: () => XP,
        FLEX_PREFIXED: () => ya,
        IS_BROWSER_ENV: () => Ke,
        TRANSFORM_PREFIXED: () => It,
        TRANSFORM_STYLE_PREFIXED: () => zn,
        withBrowser: () => jn
    });
    var $h, Ke, jn, XP, ya, It, Yh, zn, Kn = fe(() => {
        "use strict";
        $h = ie(Ea()), Ke = typeof window < "u", jn = (e, t) => Ke ? e() : t, XP = jn(() => (0, $h.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), ya = jn(() => {
            let e = document.createElement("i"), t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), It = jn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"], r = "Transform", {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), Yh = It.split("transform")[0], zn = Yh ? Yh + "TransformStyle" : "transformStyle"
    });
    var ma = c((WW, rv) => {
        var WP = 4, HP = .001, jP = 1e-7, zP = 10, Vr = 11, Yn = 1 / (Vr - 1), KP = typeof Float32Array == "function";

        function Zh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function Jh(e, t) {
            return 3 * t - 6 * e
        }

        function ev(e) {
            return 3 * e
        }

        function $n(e, t, r) {
            return ((Zh(t, r) * e + Jh(t, r)) * e + ev(t)) * e
        }

        function tv(e, t, r) {
            return 3 * Zh(t, r) * e * e + 2 * Jh(t, r) * e + ev(t)
        }

        function YP(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = $n(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > jP && ++s < zP);
            return a
        }

        function $P(e, t, r, n) {
            for (var i = 0; i < WP; ++i) {
                var o = tv(t, r, n);
                if (o === 0) return t;
                var a = $n(t, r, n) - e;
                t -= a / o
            }
            return t
        }

        rv.exports = function (t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = KP ? new Float32Array(Vr) : new Array(Vr);
            if (t !== r || n !== i) for (var a = 0; a < Vr; ++a) o[a] = $n(a * Yn, t, n);

            function s(u) {
                for (var f = 0, E = 1, g = Vr - 1; E !== g && o[E] <= u; ++E) f += Yn;
                --E;
                var p = (u - o[E]) / (o[E + 1] - o[E]), A = f + p * Yn, S = tv(A, t, n);
                return S >= HP ? $P(u, A, t, n) : S === 0 ? A : YP(u, f, f + Yn, t, n)
            }

            return function (f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : $n(s(f), r, i)
            }
        }
    });
    var Br = {};
    Ne(Br, {
        bounce: () => Nq,
        bouncePast: () => Pq,
        ease: () => QP,
        easeIn: () => ZP,
        easeInOut: () => eq,
        easeOut: () => JP,
        inBack: () => Iq,
        inCirc: () => mq,
        inCubic: () => iq,
        inElastic: () => xq,
        inExpo: () => vq,
        inOutBack: () => Aq,
        inOutCirc: () => bq,
        inOutCubic: () => aq,
        inOutElastic: () => Sq,
        inOutExpo: () => yq,
        inOutQuad: () => nq,
        inOutQuart: () => cq,
        inOutQuint: () => dq,
        inOutSine: () => hq,
        inQuad: () => tq,
        inQuart: () => sq,
        inQuint: () => lq,
        inSine: () => pq,
        outBack: () => Oq,
        outBounce: () => Tq,
        outCirc: () => _q,
        outCubic: () => oq,
        outElastic: () => wq,
        outExpo: () => Eq,
        outQuad: () => rq,
        outQuart: () => uq,
        outQuint: () => fq,
        outSine: () => gq,
        swingFrom: () => Rq,
        swingFromTo: () => Cq,
        swingTo: () => Lq
    });

    function tq(e) {
        return Math.pow(e, 2)
    }

    function rq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function nq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function iq(e) {
        return Math.pow(e, 3)
    }

    function oq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function aq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function sq(e) {
        return Math.pow(e, 4)
    }

    function uq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function cq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function lq(e) {
        return Math.pow(e, 5)
    }

    function fq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function dq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function pq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function gq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function hq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function vq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Eq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function yq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function mq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function _q(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function bq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Tq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Iq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }

    function Oq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Aq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function xq(e) {
        let t = dt, r = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function wq(e) {
        let t = dt, r = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Sq(e) {
        let t = dt, r = 0, n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Cq(e) {
        let t = dt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Rq(e) {
        let t = dt;
        return e * e * ((t + 1) * e - t)
    }

    function Lq(e) {
        let t = dt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Nq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Pq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }

    var Ur, dt, QP, ZP, JP, eq, _a = fe(() => {
        "use strict";
        Ur = ie(ma()), dt = 1.70158, QP = (0, Ur.default)(.25, .1, .25, 1), ZP = (0, Ur.default)(.42, 0, 1, 1), JP = (0, Ur.default)(0, 0, .58, 1), eq = (0, Ur.default)(.42, 0, .58, 1)
    });
    var iv = {};
    Ne(iv, {applyEasing: () => Fq, createBezierEasing: () => qq, optimizeFloat: () => kr});

    function kr(e, t = 5, r = 10) {
        let n = Math.pow(r, t), i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function qq(e) {
        return (0, nv.default)(...e)
    }

    function Fq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : kr(r ? t > 0 ? r(t) : t : t > 0 && e && Br[e] ? Br[e](t) : t)
    }

    var nv, ba = fe(() => {
        "use strict";
        _a();
        nv = ie(ma())
    });
    var sv = {};
    Ne(sv, {createElementState: () => av, ixElements: () => Yq, mergeActionState: () => Ta});

    function av(e, t, r, n, i) {
        let o = r === Mq ? (0, tr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, tr.mergeIn)(e, [n], {id: n, ref: t, refId: o, refType: r})
    }

    function Ta(e, t, r, n, i) {
        let o = Qq(i);
        return (0, tr.mergeIn)(e, [t, Kq, r], n, o)
    }

    function Qq(e) {
        let {config: t} = e;
        return $q.reduce((r, n) => {
            let i = n[0], o = n[1], a = t[i], s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }

    var tr, jW, Mq, zW, Dq, Gq, Vq, Uq, Bq, kq, Xq, Wq, Hq, jq, zq, ov, Kq, Yq, $q, uv = fe(() => {
        "use strict";
        tr = ie(jt());
        qe();
        ({
            HTML_ELEMENT: jW,
            PLAIN_OBJECT: Mq,
            ABSTRACT_NODE: zW,
            CONFIG_X_VALUE: Dq,
            CONFIG_Y_VALUE: Gq,
            CONFIG_Z_VALUE: Vq,
            CONFIG_VALUE: Uq,
            CONFIG_X_UNIT: Bq,
            CONFIG_Y_UNIT: kq,
            CONFIG_Z_UNIT: Xq,
            CONFIG_UNIT: Wq
        } = Oe), {
            IX2_SESSION_STOPPED: Hq,
            IX2_INSTANCE_ADDED: jq,
            IX2_ELEMENT_STATE_CHANGED: zq
        } = ye, ov = {}, Kq = "refState", Yq = (e = ov, t = {}) => {
            switch (t.type) {
                case Hq:
                    return ov;
                case jq: {
                    let {
                        elementId: r,
                        element: n,
                        origin: i,
                        actionItem: o,
                        refType: a
                    } = t.payload, {actionTypeId: s} = o, u = e;
                    return (0, tr.getIn)(u, [r, n]) !== n && (u = av(u, n, a, r, o)), Ta(u, r, s, i, o)
                }
                case zq: {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Ta(e, r, n, i, o)
                }
                default:
                    return e
            }
        };
        $q = [[Dq, Bq], [Gq, kq], [Vq, Xq], [Uq, Wq]]
    });
    var cv = c(be => {
        "use strict";
        Object.defineProperty(be, "__esModule", {value: !0});
        be.renderPlugin = be.getPluginOrigin = be.getPluginDuration = be.getPluginDestination = be.getPluginConfig = be.createPluginInstance = be.clearPlugin = void 0;
        var Zq = e => e.value;
        be.getPluginConfig = Zq;
        var Jq = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        be.getPluginDuration = Jq;
        var eF = e => e || {value: 0};
        be.getPluginOrigin = eF;
        var tF = e => ({value: e.value});
        be.getPluginDestination = tF;
        var rF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        be.createPluginInstance = rF;
        var nF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        be.renderPlugin = nF;
        var iF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        be.clearPlugin = iF
    });
    var fv = c(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {value: !0});
        Te.renderPlugin = Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        var oF = e => document.querySelector(`[data-w-id="${e}"]`), aF = () => window.Webflow.require("spline"),
            sF = (e, t) => e.filter(r => !t.includes(r)), uF = (e, t) => e.value[t];
        Te.getPluginConfig = uF;
        var cF = () => null;
        Te.getPluginDuration = cF;
        var lv = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        }), lF = (e, t) => {
            let r = t.config.value, n = Object.keys(r);
            if (e) {
                let o = Object.keys(e), a = sF(n, o);
                return a.length ? a.reduce((u, f) => (u[f] = lv[f], u), e) : e
            }
            return n.reduce((o, a) => (o[a] = lv[a], o), {})
        };
        Te.getPluginOrigin = lF;
        var fF = e => e.value;
        Te.getPluginDestination = fF;
        var dF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? oF(n) : null
        };
        Te.createPluginInstance = dF;
        var pF = (e, t, r) => {
            let n = aF(), i = n.getInstance(e), o = r.config.target.objectId, a = s => {
                if (!s) throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u) return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
            };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Te.renderPlugin = pF;
        var gF = () => null;
        Te.clearPlugin = gF
    });
    var Oa = c(Ia => {
        "use strict";
        Object.defineProperty(Ia, "__esModule", {value: !0});
        Ia.normalizeColor = hF;
        var dv = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function hF(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof dv[o] == "string" ? dv[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","), f = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100, g = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * g - 1)) * E, A = p * (1 - Math.abs(f / 60 % 2 - 1)), S = g - p / 2, T, C, I;
                f >= 0 && f < 60 ? (T = p, C = A, I = 0) : f >= 60 && f < 120 ? (T = A, C = p, I = 0) : f >= 120 && f < 180 ? (T = 0, C = p, I = A) : f >= 180 && f < 240 ? (T = 0, C = A, I = p) : f >= 240 && f < 300 ? (T = A, C = 0, I = p) : (T = p, C = 0, I = A), t = Math.round((T + S) * 255), r = Math.round((C + S) * 255), n = Math.round((I + S) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), f = parseFloat(u[0]),
                    E = parseFloat(u[1].replace("%", "")) / 100, g = parseFloat(u[2].replace("%", "")) / 100,
                    p = (1 - Math.abs(2 * g - 1)) * E, A = p * (1 - Math.abs(f / 60 % 2 - 1)), S = g - p / 2, T, C, I;
                f >= 0 && f < 60 ? (T = p, C = A, I = 0) : f >= 60 && f < 120 ? (T = A, C = p, I = 0) : f >= 120 && f < 180 ? (T = 0, C = p, I = A) : f >= 180 && f < 240 ? (T = 0, C = A, I = p) : f >= 240 && f < 300 ? (T = A, C = 0, I = p) : (T = p, C = 0, I = A), t = Math.round((T + S) * 255), r = Math.round((C + S) * 255), n = Math.round((I + S) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {red: t, green: r, blue: n, alpha: i}
        }
    });
    var pv = c(Ie => {
        "use strict";
        Object.defineProperty(Ie, "__esModule", {value: !0});
        Ie.renderPlugin = Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
        var vF = Oa(), EF = (e, t) => e.value[t];
        Ie.getPluginConfig = EF;
        var yF = () => null;
        Ie.getPluginDuration = yF;
        var mF = (e, t) => {
            if (e) return e;
            let r = t.config.value, n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {size: parseInt(i, 10)};
            if (r.red != null && r.green != null && r.blue != null) return (0, vF.normalizeColor)(i)
        };
        Ie.getPluginOrigin = mF;
        var _F = e => e.value;
        Ie.getPluginDestination = _F;
        var bF = () => null;
        Ie.createPluginInstance = bF;
        var TF = (e, t, r) => {
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {
                size: a,
                red: s,
                green: u,
                blue: f,
                alpha: E
            } = o, g;
            a != null && (g = a + i), s != null && f != null && u != null && E != null && (g = `rgba(${s}, ${u}, ${f}, ${E})`), g != null && document.documentElement.style.setProperty(n, g)
        };
        Ie.renderPlugin = TF;
        var IF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Ie.clearPlugin = IF
    });
    var gv = c(Qn => {
        "use strict";
        var xa = un().default;
        Object.defineProperty(Qn, "__esModule", {value: !0});
        Qn.pluginMethodMap = void 0;
        var Aa = (qe(), Ze(_f)), OF = xa(cv()), AF = xa(fv()), xF = xa(pv()),
            ZW = Qn.pluginMethodMap = new Map([[Aa.ActionTypeConsts.PLUGIN_LOTTIE, {...OF}], [Aa.ActionTypeConsts.PLUGIN_SPLINE, {...AF}], [Aa.ActionTypeConsts.PLUGIN_VARIABLE, {...xF}]])
    });
    var hv = {};
    Ne(hv, {
        clearPlugin: () => Na,
        createPluginInstance: () => SF,
        getPluginConfig: () => Sa,
        getPluginDestination: () => Ra,
        getPluginDuration: () => wF,
        getPluginOrigin: () => Ca,
        isPluginType: () => Nt,
        renderPlugin: () => La
    });

    function Nt(e) {
        return wa.pluginMethodMap.has(e)
    }

    var wa, Pt, Sa, Ca, wF, Ra, SF, La, Na, Pa = fe(() => {
        "use strict";
        Kn();
        wa = ie(gv());
        Pt = e => t => {
            if (!Ke) return () => null;
            let r = wa.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Sa = Pt("getPluginConfig"), Ca = Pt("getPluginOrigin"), wF = Pt("getPluginDuration"), Ra = Pt("getPluginDestination"), SF = Pt("createPluginInstance"), La = Pt("renderPlugin"), Na = Pt("clearPlugin")
    });
    var Ev = c((tH, vv) => {
        function CF(e, t) {
            return e == null || e !== e ? t : e
        }

        vv.exports = CF
    });
    var mv = c((rH, yv) => {
        function RF(e, t, r, n) {
            var i = -1, o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }

        yv.exports = RF
    });
    var bv = c((nH, _v) => {
        function LF(e) {
            return function (t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }

        _v.exports = LF
    });
    var Iv = c((iH, Tv) => {
        var NF = bv(), PF = NF();
        Tv.exports = PF
    });
    var qa = c((oH, Ov) => {
        var qF = Iv(), FF = Mr();

        function MF(e, t) {
            return e && qF(e, t, FF)
        }

        Ov.exports = MF
    });
    var xv = c((aH, Av) => {
        var DF = Rt();

        function GF(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!DF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;) ;
                return r
            }
        }

        Av.exports = GF
    });
    var Fa = c((sH, wv) => {
        var VF = qa(), UF = xv(), BF = UF(VF);
        wv.exports = BF
    });
    var Cv = c((uH, Sv) => {
        function kF(e, t, r, n, i) {
            return i(e, function (o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }

        Sv.exports = kF
    });
    var Lv = c((cH, Rv) => {
        var XF = mv(), WF = Fa(), HF = Tt(), jF = Cv(), zF = _e();

        function KF(e, t, r) {
            var n = zF(e) ? XF : jF, i = arguments.length < 3;
            return n(e, HF(t, 4), r, i, WF)
        }

        Rv.exports = KF
    });
    var Pv = c((lH, Nv) => {
        var YF = ha(), $F = Tt(), QF = va(), ZF = Math.max, JF = Math.min;

        function eM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = QF(r), i = r < 0 ? ZF(n + i, 0) : JF(i, n - 1)), YF(e, $F(t, 3), i, !0)
        }

        Nv.exports = eM
    });
    var Fv = c((fH, qv) => {
        var tM = ga(), rM = Pv(), nM = tM(rM);
        qv.exports = nM
    });

    function Mv(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function oM(e, t) {
        if (Mv(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e), n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++) if (!iM.call(t, r[i]) || !Mv(e[r[i]], t[r[i]])) return !1;
        return !0
    }

    var iM, Ma, Dv = fe(() => {
        "use strict";
        iM = Object.prototype.hasOwnProperty;
        Ma = oM
    });
    var tE = {};
    Ne(tE, {
        cleanupHTMLElement: () => r1,
        clearAllStyles: () => t1,
        clearObjectCache: () => TM,
        getActionListProgress: () => i1,
        getAffectedElements: () => Ba,
        getComputedStyle: () => RM,
        getDestinationValues: () => DM,
        getElementId: () => xM,
        getInstanceId: () => OM,
        getInstanceOrigin: () => PM,
        getItemConfigByKey: () => MM,
        getMaxDurationItemIndex: () => eE,
        getNamespacedParameterId: () => s1,
        getRenderType: () => Qv,
        getStyleProp: () => GM,
        mediaQueriesEqual: () => c1,
        observeStore: () => CM,
        reduceListToGroup: () => o1,
        reifyState: () => wM,
        renderHTMLElement: () => VM,
        shallowEqual: () => Ma,
        shouldAllowMediaQuery: () => u1,
        shouldNamespaceEventParameter: () => a1,
        stringifyTarget: () => l1
    });

    function TM() {
        Zn.clear()
    }

    function OM() {
        return "i" + IM++
    }

    function xM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + AM++
    }

    function wM({events: e, actionLists: t, site: r} = {}) {
        let n = (0, ri.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}), a[u][s.id] = s, a
        }, {}), i = r && r.mediaQueries, o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function CM({store: e, select: t, onChange: r, comparator: n = SM}) {
        let {getState: i, subscribe: o} = e, a = o(u), s = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                a();
                return
            }
            n(f, s) || (s = f, r(s, e))
        }

        return a
    }

    function Uv(e) {
        let t = typeof e;
        if (t === "string") return {id: e};
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s}
        }
        return {}
    }

    function Ba({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((q, O) => q.concat(Ba({
            config: {target: O},
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: f,
            getSiblingElements: E,
            matchSelector: g,
            elementContains: p,
            isSiblingNode: A
        } = i, {target: S} = e;
        if (!S) return [];
        let {id: T, objectId: C, selector: I, selectorGuids: L, appliesTo: R, useEventTarget: D} = Uv(S);
        if (C) return [Zn.has(C) ? Zn.get(C) : Zn.set(C, {}).get(C)];
        if (R === Uo.PAGE) {
            let q = a(T);
            return q ? [q] : []
        }
        let N = (t?.action?.config?.affectedElements ?? {})[T || I] || {}, k = !!(N.id || N.selector), X, H, Y,
            Q = t && s(Uv(t.target));
        if (k ? (X = N.limitAffectedElements, H = Q, Y = s(N)) : H = Y = s({
            id: T,
            selector: I,
            selectorGuids: L
        }), t && D) {
            let q = r && (Y || D === !0) ? [r] : u(Q);
            if (Y) {
                if (D === mM) return u(Y).filter(O => q.some(P => p(O, P)));
                if (D === Gv) return u(Y).filter(O => q.some(P => p(P, O)));
                if (D === Vv) return u(Y).filter(O => q.some(P => A(P, O)))
            }
            return q
        }
        return H == null || Y == null ? [] : Ke && n ? u(Y).filter(q => n.contains(q)) : X === Gv ? u(H, Y) : X === yM ? f(u(H)).filter(g(Y)) : X === Vv ? E(u(H)).filter(g(Y)) : u(Y)
    }

    function RM({element: e, actionItem: t}) {
        if (!Ke) return {};
        let {actionTypeId: r} = t;
        switch (r) {
            case ar:
            case sr:
            case ur:
            case cr:
            case ii:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function PM(e, t = {}, r = {}, n, i) {
        let {getStyle: o} = i, {actionTypeId: a} = n;
        if (Nt(a)) return Ca(a)(t[a], n);
        switch (n.actionTypeId) {
            case nr:
            case ir:
            case or:
            case jr:
                return t[n.actionTypeId] || ka[n.actionTypeId];
            case zr:
                return LM(t[n.actionTypeId], n.config.filters);
            case Kr:
                return NM(t[n.actionTypeId], n.config.fontVariations);
            case Kv:
                return {value: (0, pt.default)(parseFloat(o(e, ei)), 1)};
            case ar: {
                let s = o(e, ot), u = o(e, at), f, E;
                return n.config.widthUnit === Ot ? f = Bv.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, pt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Ot ? E = Bv.test(u) ? parseFloat(u) : parseFloat(r.height) : E = (0, pt.default)(parseFloat(u), parseFloat(r.height)), {
                    widthValue: f,
                    heightValue: E
                }
            }
            case sr:
            case ur:
            case cr:
                return ZM({element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: o});
            case ii:
                return {value: (0, pt.default)(o(e, ti), r.display)};
            case bM:
                return t[n.actionTypeId] || {value: 0};
            default:
                return
        }
    }

    function DM({element: e, actionItem: t, elementApi: r}) {
        if (Nt(t.actionTypeId)) return Ra(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case nr:
            case ir:
            case or:
            case jr: {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {xValue: n, yValue: i, zValue: o}
            }
            case ar: {
                let {getStyle: n, setStyle: i, getProperty: o} = r, {
                    widthUnit: a,
                    heightUnit: s
                } = t.config, {widthValue: u, heightValue: f} = t.config;
                if (!Ke) return {widthValue: u, heightValue: f};
                if (a === Ot) {
                    let E = n(e, ot);
                    i(e, ot, ""), u = o(e, "offsetWidth"), i(e, ot, E)
                }
                if (s === Ot) {
                    let E = n(e, at);
                    i(e, at, ""), f = o(e, "offsetHeight"), i(e, at, E)
                }
                return {widthValue: u, heightValue: f}
            }
            case sr:
            case ur:
            case cr: {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r, f = u(e, s), E = (0, Wv.normalizeColor)(f);
                    return {rValue: E.red, gValue: E.green, bValue: E.blue, aValue: E.alpha}
                }
                return {rValue: n, gValue: i, bValue: o, aValue: a}
            }
            case zr:
                return t.config.filters.reduce(qM, {});
            case Kr:
                return t.config.fontVariations.reduce(FM, {});
            default: {
                let {value: n} = t.config;
                return {value: n}
            }
        }
    }

    function Qv(e) {
        if (/^TRANSFORM_/.test(e)) return jv;
        if (/^STYLE_/.test(e)) return Va;
        if (/^GENERAL_/.test(e)) return Ga;
        if (/^PLUGIN_/.test(e)) return zv
    }

    function GM(e, t) {
        return e === Va ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function VM(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case jv:
                return WM(e, t, r, i, a);
            case Va:
                return JM(e, t, r, i, o, a);
            case Ga:
                return e1(e, i, a);
            case zv: {
                let {actionTypeId: f} = i;
                if (Nt(f)) return La(f)(u, t, i)
            }
        }
    }

    function WM(e, t, r, n, i) {
        let o = XM.map(s => {
            let u = ka[s], {
                xValue: f = u.xValue,
                yValue: E = u.yValue,
                zValue: g = u.zValue,
                xUnit: p = "",
                yUnit: A = "",
                zUnit: S = ""
            } = t[s] || {};
            switch (s) {
                case nr:
                    return `${uM}(${f}${p}, ${E}${A}, ${g}${S})`;
                case ir:
                    return `${cM}(${f}${p}, ${E}${A}, ${g}${S})`;
                case or:
                    return `${lM}(${f}${p}) ${fM}(${E}${A}) ${dM}(${g}${S})`;
                case jr:
                    return `${pM}(${f}${p}, ${E}${A})`;
                default:
                    return ""
            }
        }).join(" "), {setStyle: a} = i;
        qt(e, It, i), a(e, It, o), zM(n, r) && a(e, zn, gM)
    }

    function HM(e, t, r, n) {
        let i = (0, ri.default)(t, (a, s, u) => `${a} ${u}(${s}${kM(u, r)})`, ""), {setStyle: o} = n;
        qt(e, Xr, n), o(e, Xr, i)
    }

    function jM(e, t, r, n) {
        let i = (0, ri.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "), {setStyle: o} = n;
        qt(e, Wr, n), o(e, Wr, i)
    }

    function zM({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === nr && n !== void 0 || e === ir && n !== void 0 || e === or && (t !== void 0 || r !== void 0)
    }

    function QM(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function ZM({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = Ua[t], o = n(e, i), a = YM.test(o) ? o : r[i], s = QM($M, a).split(Hr);
        return {
            rValue: (0, pt.default)(parseInt(s[0], 10), 255),
            gValue: (0, pt.default)(parseInt(s[1], 10), 255),
            bValue: (0, pt.default)(parseInt(s[2], 10), 255),
            aValue: (0, pt.default)(parseFloat(s[3]), 1)
        }
    }

    function JM(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
            case ar: {
                let {widthUnit: s = "", heightUnit: u = ""} = n.config, {widthValue: f, heightValue: E} = r;
                f !== void 0 && (s === Ot && (s = "px"), qt(e, ot, o), a(e, ot, f + s)), E !== void 0 && (u === Ot && (u = "px"), qt(e, at, o), a(e, at, E + u));
                break
            }
            case zr: {
                HM(e, r, n.config, o);
                break
            }
            case Kr: {
                jM(e, r, n.config, o);
                break
            }
            case sr:
            case ur:
            case cr: {
                let s = Ua[n.actionTypeId], u = Math.round(r.rValue), f = Math.round(r.gValue),
                    E = Math.round(r.bValue), g = r.aValue;
                qt(e, s, o), a(e, s, g >= 1 ? `rgb(${u},${f},${E})` : `rgba(${u},${f},${E},${g})`);
                break
            }
            default: {
                let {unit: s = ""} = n.config;
                qt(e, i, o), a(e, i, r.value + s);
                break
            }
        }
    }

    function e1(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
            case ii: {
                let {value: i} = t.config;
                i === hM && Ke ? n(e, ti, ya) : n(e, ti, i);
                return
            }
        }
    }

    function qt(e, t, r) {
        if (!Ke) return;
        let n = $v[t];
        if (!n) return;
        let {getStyle: i, setStyle: o} = r, a = i(e, rr);
        if (!a) {
            o(e, rr, n);
            return
        }
        let s = a.split(Hr).map(Yv);
        s.indexOf(n) === -1 && o(e, rr, s.concat(n).join(Hr))
    }

    function Zv(e, t, r) {
        if (!Ke) return;
        let n = $v[t];
        if (!n) return;
        let {getStyle: i, setStyle: o} = r, a = i(e, rr);
        !a || a.indexOf(n) === -1 || o(e, rr, a.split(Hr).map(Yv).filter(s => s !== n).join(Hr))
    }

    function t1({store: e, elementApi: t}) {
        let {ixData: r} = e.getState(), {events: n = {}, actionLists: i = {}} = r;
        Object.keys(n).forEach(o => {
            let a = n[o], {config: s} = a.action, {actionListId: u} = s, f = i[u];
            f && kv({actionList: f, event: a, elementApi: t})
        }), Object.keys(i).forEach(o => {
            kv({actionList: i[o], elementApi: t})
        })
    }

    function kv({actionList: e = {}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o => {
            Xv({actionGroup: o, event: t, elementApi: r})
        }), i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                Xv({actionGroup: s, event: t, elementApi: r})
            })
        })
    }

    function Xv({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            Nt(o) ? s = u => Na(o)(u, i) : s = Jv({effect: n1, actionTypeId: o, elementApi: r}), Ba({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function r1(e, t, r) {
        let {setStyle: n, getStyle: i} = r, {actionTypeId: o} = t;
        if (o === ar) {
            let {config: a} = t;
            a.widthUnit === Ot && n(e, ot, ""), a.heightUnit === Ot && n(e, at, "")
        }
        i(e, rr) && Jv({effect: Zv, actionTypeId: o, elementApi: r})(e)
    }

    function n1(e, t, r) {
        let {setStyle: n} = r;
        Zv(e, t, r), n(e, t, ""), t === It && n(e, zn, "")
    }

    function eE(e) {
        let t = 0, r = 0;
        return e.forEach((n, i) => {
            let {config: o} = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function i1(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e, {actionItem: i, verboseTimeElapsed: o = 0} = t,
            a = 0, s = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {actionItems: E} = u, g = E[eE(E)], {config: p, actionTypeId: A} = g;
            i.id === g.id && (s = a + o);
            let S = Qv(A) === Ga ? 0 : p.duration;
            a += p.delay + S
        }), a > 0 ? kr(s / a) : 0
    }

    function o1({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e, o = [],
            a = s => (o.push((0, ni.mergeIn)(s, ["config"], {delay: 0, duration: 0})), s.id === t);
        return n && n.some(({actionItems: s}) => s.some(a)), i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some(({actionItems: f}) => f.some(a))
        }), (0, ni.setIn)(r, ["actionLists"], {[e.id]: {id: e.id, actionItemGroups: [{actionItems: o}]}})
    }

    function a1(e, {basedOn: t}) {
        return e === ze.SCROLLING_IN_VIEW && (t === nt.ELEMENT || t == null) || e === ze.MOUSE_MOVE && t === nt.ELEMENT
    }

    function s1(e, t) {
        return e + _M + t
    }

    function u1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function c1(e, t) {
        return Ma(e && e.sort(), t && t.sort())
    }

    function l1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Da + e.objectId;
        if (e.objectId) return e.objectId;
        let {id: t = "", selector: r = "", useEventTarget: n = ""} = e;
        return t + Da + r + Da + n
    }

    var pt, ri, Jn, ni, Wv, aM, sM, uM, cM, lM, fM, dM, pM, gM, hM, ei, Xr, Wr, ot, at, Hv, vM, EM, Gv, yM, Vv, mM, ti,
        rr, Ot, Hr, _M, Da, jv, Ga, Va, zv, nr, ir, or, jr, Kv, zr, Kr, ar, sr, ur, cr, ii, bM, Yv, Ua, $v, Zn, IM, AM,
        SM, Bv, LM, NM, qM, FM, MM, ka, UM, BM, kM, XM, KM, YM, $M, Jv, rE = fe(() => {
            "use strict";
            pt = ie(Ev()), ri = ie(Lv()), Jn = ie(Fv()), ni = ie(jt());
            qe();
            Dv();
            ba();
            Wv = ie(Oa());
            Pa();
            Kn();
            ({
                BACKGROUND: aM,
                TRANSFORM: sM,
                TRANSLATE_3D: uM,
                SCALE_3D: cM,
                ROTATE_X: lM,
                ROTATE_Y: fM,
                ROTATE_Z: dM,
                SKEW: pM,
                PRESERVE_3D: gM,
                FLEX: hM,
                OPACITY: ei,
                FILTER: Xr,
                FONT_VARIATION_SETTINGS: Wr,
                WIDTH: ot,
                HEIGHT: at,
                BACKGROUND_COLOR: Hv,
                BORDER_COLOR: vM,
                COLOR: EM,
                CHILDREN: Gv,
                IMMEDIATE_CHILDREN: yM,
                SIBLINGS: Vv,
                PARENT: mM,
                DISPLAY: ti,
                WILL_CHANGE: rr,
                AUTO: Ot,
                COMMA_DELIMITER: Hr,
                COLON_DELIMITER: _M,
                BAR_DELIMITER: Da,
                RENDER_TRANSFORM: jv,
                RENDER_GENERAL: Ga,
                RENDER_STYLE: Va,
                RENDER_PLUGIN: zv
            } = Oe), {
                TRANSFORM_MOVE: nr,
                TRANSFORM_SCALE: ir,
                TRANSFORM_ROTATE: or,
                TRANSFORM_SKEW: jr,
                STYLE_OPACITY: Kv,
                STYLE_FILTER: zr,
                STYLE_FONT_VARIATION: Kr,
                STYLE_SIZE: ar,
                STYLE_BACKGROUND_COLOR: sr,
                STYLE_BORDER: ur,
                STYLE_TEXT_COLOR: cr,
                GENERAL_DISPLAY: ii,
                OBJECT_VALUE: bM
            } = Pe, Yv = e => e.trim(), Ua = Object.freeze({[sr]: Hv, [ur]: vM, [cr]: EM}), $v = Object.freeze({
                [It]: sM,
                [Hv]: aM,
                [ei]: ei,
                [Xr]: Xr,
                [ot]: ot,
                [at]: at,
                [Wr]: Wr
            }), Zn = new Map;
            IM = 1;
            AM = 1;
            SM = (e, t) => e === t;
            Bv = /px/, LM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = UM[n.type]), r), e || {}), NM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = BM[n.type] || n.defaultValue || 0), r), e || {});
            qM = (e, t) => (t && (e[t.type] = t.value || 0), e), FM = (e, t) => (t && (e[t.type] = t.value || 0), e), MM = (e, t, r) => {
                if (Nt(e)) return Sa(e)(r, t);
                switch (e) {
                    case zr: {
                        let n = (0, Jn.default)(r.filters, ({type: i}) => i === t);
                        return n ? n.value : 0
                    }
                    case Kr: {
                        let n = (0, Jn.default)(r.fontVariations, ({type: i}) => i === t);
                        return n ? n.value : 0
                    }
                    default:
                        return r[t]
                }
            };
            ka = {
                [nr]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}),
                [ir]: Object.freeze({xValue: 1, yValue: 1, zValue: 1}),
                [or]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}),
                [jr]: Object.freeze({xValue: 0, yValue: 0})
            }, UM = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }), BM = Object.freeze({wght: 0, opsz: 0, wdth: 0, slnt: 0}), kM = (e, t) => {
                let r = (0, Jn.default)(t.filters, ({type: n}) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case"blur":
                        return "px";
                    case"hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            }, XM = Object.keys(ka);
            KM = "\\(([^)]+)\\)", YM = /^rgb/, $M = RegExp(`rgba?${KM}`);
            Jv = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
                switch (t) {
                    case nr:
                    case ir:
                    case or:
                    case jr:
                        e(n, It, r);
                        break;
                    case zr:
                        e(n, Xr, r);
                        break;
                    case Kr:
                        e(n, Wr, r);
                        break;
                    case Kv:
                        e(n, ei, r);
                        break;
                    case ar:
                        e(n, ot, r), e(n, at, r);
                        break;
                    case sr:
                    case ur:
                    case cr:
                        e(n, Ua[t], r);
                        break;
                    case ii:
                        e(n, ti, r);
                        break
                }
            }
        });
    var Ft = c(Ce => {
        "use strict";
        var lr = un().default;
        Object.defineProperty(Ce, "__esModule", {value: !0});
        Ce.IX2VanillaUtils = Ce.IX2VanillaPlugins = Ce.IX2ElementsReducer = Ce.IX2Easings = Ce.IX2EasingUtils = Ce.IX2BrowserSupport = void 0;
        var f1 = lr((Kn(), Ze(Qh)));
        Ce.IX2BrowserSupport = f1;
        var d1 = lr((_a(), Ze(Br)));
        Ce.IX2Easings = d1;
        var p1 = lr((ba(), Ze(iv)));
        Ce.IX2EasingUtils = p1;
        var g1 = lr((uv(), Ze(sv)));
        Ce.IX2ElementsReducer = g1;
        var h1 = lr((Pa(), Ze(hv)));
        Ce.IX2VanillaPlugins = h1;
        var v1 = lr((rE(), Ze(tE)));
        Ce.IX2VanillaUtils = v1
    });
    var ai, gt, E1, y1, m1, _1, b1, T1, oi, nE, I1, O1, Xa, A1, x1, w1, S1, iE, oE = fe(() => {
        "use strict";
        qe();
        ai = ie(Ft()), gt = ie(jt()), {
            IX2_RAW_DATA_IMPORTED: E1,
            IX2_SESSION_STOPPED: y1,
            IX2_INSTANCE_ADDED: m1,
            IX2_INSTANCE_STARTED: _1,
            IX2_INSTANCE_REMOVED: b1,
            IX2_ANIMATION_FRAME_CHANGED: T1
        } = ye, {
            optimizeFloat: oi,
            applyEasing: nE,
            createBezierEasing: I1
        } = ai.IX2EasingUtils, {RENDER_GENERAL: O1} = Oe, {
            getItemConfigByKey: Xa,
            getRenderType: A1,
            getStyleProp: x1
        } = ai.IX2VanillaUtils, w1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: f,
                skipMotion: E,
                skipToValue: g
            } = e, {parameters: p} = t.payload, A = Math.max(1 - a, .01), S = p[n];
            S == null && (A = 1, S = s);
            let T = Math.max(S, 0) || 0, C = oi(T - r), I = E ? g : oi(r + C * A), L = I * 100;
            if (I === r && e.current) return e;
            let R, D, M, N;
            for (let X = 0, {length: H} = i; X < H; X++) {
                let {keyframe: Y, actionItems: Q} = i[X];
                if (X === 0 && (R = Q[0]), L >= Y) {
                    R = Q[0];
                    let q = i[X + 1], O = q && L !== Y;
                    D = O ? q.actionItems[0] : null, O && (M = Y / 100, N = (q.keyframe - Y) / 100)
                }
            }
            let k = {};
            if (R && !D) for (let X = 0, {length: H} = o; X < H; X++) {
                let Y = o[X];
                k[Y] = Xa(u, Y, R.config)
            } else if (R && D && M !== void 0 && N !== void 0) {
                let X = (I - M) / N, H = R.config.easing, Y = nE(H, X, f);
                for (let Q = 0, {length: q} = o; Q < q; Q++) {
                    let O = o[Q], P = Xa(u, O, R.config), Z = (Xa(u, O, D.config) - P) * Y + P;
                    k[O] = Z
                }
            }
            return (0, gt.merge)(e, {position: I, current: k})
        }, S1 = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: f,
                destinationKeys: E,
                pluginDuration: g,
                instanceDelay: p,
                customEasingFn: A,
                skipMotion: S
            } = e, T = u.config.easing, {duration: C, delay: I} = u.config;
            g != null && (C = g), I = p ?? I, a === O1 ? C = 0 : (o || S) && (C = I = 0);
            let {now: L} = t.payload;
            if (r && n) {
                let R = L - (i + I);
                if (s) {
                    let X = L - i, H = C + I, Y = oi(Math.min(Math.max(0, X / H), 1));
                    e = (0, gt.set)(e, "verboseTimeElapsed", H * Y)
                }
                if (R < 0) return e;
                let D = oi(Math.min(Math.max(0, R / C), 1)), M = nE(T, D, A), N = {}, k = null;
                return E.length && (k = E.reduce((X, H) => {
                    let Y = f[H], Q = parseFloat(n[H]) || 0, O = (parseFloat(Y) - Q) * M + Q;
                    return X[H] = O, X
                }, {})), N.current = k, N.position = D, D === 1 && (N.active = !1, N.complete = !0), (0, gt.merge)(e, N)
            }
            return e
        }, iE = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case E1:
                    return t.payload.ixInstances || Object.freeze({});
                case y1:
                    return Object.freeze({});
                case m1: {
                    let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: a,
                            eventStateKey: s,
                            actionListId: u,
                            groupIndex: f,
                            isCarrier: E,
                            origin: g,
                            destination: p,
                            immediate: A,
                            verbose: S,
                            continuous: T,
                            parameterId: C,
                            actionGroups: I,
                            smoothing: L,
                            restingValue: R,
                            pluginInstance: D,
                            pluginDuration: M,
                            instanceDelay: N,
                            skipMotion: k,
                            skipToValue: X
                        } = t.payload, {actionTypeId: H} = i, Y = A1(H), Q = x1(Y, H),
                        q = Object.keys(p).filter(P => p[P] != null && typeof p[P] != "string"), {easing: O} = i.config;
                    return (0, gt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: g,
                        destination: p,
                        destinationKeys: q,
                        immediate: A,
                        verbose: S,
                        current: null,
                        actionItem: i,
                        actionTypeId: H,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: f,
                        renderType: Y,
                        isCarrier: E,
                        styleProp: Q,
                        continuous: T,
                        parameterId: C,
                        actionGroups: I,
                        smoothing: L,
                        restingValue: R,
                        pluginInstance: D,
                        pluginDuration: M,
                        instanceDelay: N,
                        skipMotion: k,
                        skipToValue: X,
                        customEasingFn: Array.isArray(O) && O.length === 4 ? I1(O) : void 0
                    })
                }
                case _1: {
                    let {instanceId: r, time: n} = t.payload;
                    return (0, gt.mergeIn)(e, [r], {active: !0, complete: !1, start: n})
                }
                case b1: {
                    let {instanceId: r} = t.payload;
                    if (!e[r]) return e;
                    let n = {}, i = Object.keys(e), {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
                case T1: {
                    let r = e, n = Object.keys(e), {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o], s = e[a], u = s.continuous ? w1 : S1;
                        r = (0, gt.set)(r, a, u(s, t))
                    }
                    return r
                }
                default:
                    return e
            }
        }
    });
    var C1, R1, L1, aE, sE = fe(() => {
        "use strict";
        qe();
        ({IX2_RAW_DATA_IMPORTED: C1, IX2_SESSION_STOPPED: R1, IX2_PARAMETER_CHANGED: L1} = ye), aE = (e = {}, t) => {
            switch (t.type) {
                case C1:
                    return t.payload.ixParameters || {};
                case R1:
                    return {};
                case L1: {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n, e
                }
                default:
                    return e
            }
        }
    });
    var lE = {};
    Ne(lE, {default: () => P1});
    var uE, cE, N1, P1, fE = fe(() => {
        "use strict";
        uE = ie(Vo());
        Tf();
        Xf();
        jf();
        cE = ie(Ft());
        oE();
        sE();
        ({ixElements: N1} = cE.IX2ElementsReducer), P1 = (0, uE.combineReducers)({
            ixData: bf,
            ixRequest: kf,
            ixSession: Hf,
            ixElements: N1,
            ixInstances: iE,
            ixParameters: aE
        })
    });
    var pE = c((SH, dE) => {
        var q1 = _t(), F1 = _e(), M1 = ft(), D1 = "[object String]";

        function G1(e) {
            return typeof e == "string" || !F1(e) && M1(e) && q1(e) == D1
        }

        dE.exports = G1
    });
    var hE = c((CH, gE) => {
        var V1 = pa(), U1 = V1("length");
        gE.exports = U1
    });
    var EE = c((RH, vE) => {
        var B1 = "\\ud800-\\udfff", k1 = "\\u0300-\\u036f", X1 = "\\ufe20-\\ufe2f", W1 = "\\u20d0-\\u20ff",
            H1 = k1 + X1 + W1, j1 = "\\ufe0e\\ufe0f", z1 = "\\u200d", K1 = RegExp("[" + z1 + B1 + H1 + j1 + "]");

        function Y1(e) {
            return K1.test(e)
        }

        vE.exports = Y1
    });
    var xE = c((LH, AE) => {
        var mE = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", Q1 = "\\ufe20-\\ufe2f", Z1 = "\\u20d0-\\u20ff",
            J1 = $1 + Q1 + Z1, eD = "\\ufe0e\\ufe0f", tD = "[" + mE + "]", Wa = "[" + J1 + "]",
            Ha = "\\ud83c[\\udffb-\\udfff]", rD = "(?:" + Wa + "|" + Ha + ")", _E = "[^" + mE + "]",
            bE = "(?:\\ud83c[\\udde6-\\uddff]){2}", TE = "[\\ud800-\\udbff][\\udc00-\\udfff]", nD = "\\u200d",
            IE = rD + "?", OE = "[" + eD + "]?",
            iD = "(?:" + nD + "(?:" + [_E, bE, TE].join("|") + ")" + OE + IE + ")*", oD = OE + IE + iD,
            aD = "(?:" + [_E + Wa + "?", Wa, bE, TE, tD].join("|") + ")",
            yE = RegExp(Ha + "(?=" + Ha + ")|" + aD + oD, "g");

        function sD(e) {
            for (var t = yE.lastIndex = 0; yE.test(e);) ++t;
            return t
        }

        AE.exports = sD
    });
    var SE = c((NH, wE) => {
        var uD = hE(), cD = EE(), lD = xE();

        function fD(e) {
            return cD(e) ? lD(e) : uD(e)
        }

        wE.exports = fD
    });
    var RE = c((PH, CE) => {
        var dD = Gn(), pD = Vn(), gD = Rt(), hD = pE(), vD = SE(), ED = "[object Map]", yD = "[object Set]";

        function mD(e) {
            if (e == null) return 0;
            if (gD(e)) return hD(e) ? vD(e) : e.length;
            var t = pD(e);
            return t == ED || t == yD ? e.size : dD(e).length
        }

        CE.exports = mD
    });
    var NE = c((qH, LE) => {
        var _D = "Expected a function";

        function bD(e) {
            if (typeof e != "function") throw new TypeError(_D);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }

        LE.exports = bD
    });
    var ja = c((FH, PE) => {
        var TD = bt(), ID = function () {
            try {
                var e = TD(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {
            }
        }();
        PE.exports = ID
    });
    var za = c((MH, FE) => {
        var qE = ja();

        function OD(e, t, r) {
            t == "__proto__" && qE ? qE(e, t, {configurable: !0, enumerable: !0, value: r, writable: !0}) : e[t] = r
        }

        FE.exports = OD
    });
    var DE = c((DH, ME) => {
        var AD = za(), xD = Sn(), wD = Object.prototype, SD = wD.hasOwnProperty;

        function CD(e, t, r) {
            var n = e[t];
            (!(SD.call(e, t) && xD(n, r)) || r === void 0 && !(t in e)) && AD(e, t, r)
        }

        ME.exports = CD
    });
    var UE = c((GH, VE) => {
        var RD = DE(), LD = Gr(), ND = qn(), GE = it(), PD = er();

        function qD(e, t, r, n) {
            if (!GE(e)) return e;
            t = LD(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = PD(t[i]), f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var E = s[u];
                    f = n ? n(E, u, s) : void 0, f === void 0 && (f = GE(E) ? E : ND(t[i + 1]) ? [] : {})
                }
                RD(s, u, f), s = s[u]
            }
            return e
        }

        VE.exports = qD
    });
    var kE = c((VH, BE) => {
        var FD = kn(), MD = UE(), DD = Gr();

        function GD(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n], s = FD(e, a);
                r(s, a) && MD(o, DD(a, e), s)
            }
            return o
        }

        BE.exports = GD
    });
    var WE = c((UH, XE) => {
        var VD = Nn(), UD = xo(), BD = Zo(), kD = Qo(), XD = Object.getOwnPropertySymbols, WD = XD ? function (e) {
            for (var t = []; e;) VD(t, BD(e)), e = UD(e);
            return t
        } : kD;
        XE.exports = WD
    });
    var jE = c((BH, HE) => {
        function HD(e) {
            var t = [];
            if (e != null) for (var r in Object(e)) t.push(r);
            return t
        }

        HE.exports = HD
    });
    var KE = c((kH, zE) => {
        var jD = it(), zD = Dn(), KD = jE(), YD = Object.prototype, $D = YD.hasOwnProperty;

        function QD(e) {
            if (!jD(e)) return KD(e);
            var t = zD(e), r = [];
            for (var n in e) n == "constructor" && (t || !$D.call(e, n)) || r.push(n);
            return r
        }

        zE.exports = QD
    });
    var $E = c((XH, YE) => {
        var ZD = ea(), JD = KE(), e2 = Rt();

        function t2(e) {
            return e2(e) ? ZD(e, !0) : JD(e)
        }

        YE.exports = t2
    });
    var ZE = c((WH, QE) => {
        var r2 = $o(), n2 = WE(), i2 = $E();

        function o2(e) {
            return r2(e, i2, n2)
        }

        QE.exports = o2
    });
    var ey = c((HH, JE) => {
        var a2 = da(), s2 = Tt(), u2 = kE(), c2 = ZE();

        function l2(e, t) {
            if (e == null) return {};
            var r = a2(c2(e), function (n) {
                return [n]
            });
            return t = s2(t), u2(e, r, function (n, i) {
                return t(n, i[0])
            })
        }

        JE.exports = l2
    });
    var ry = c((jH, ty) => {
        var f2 = Tt(), d2 = NE(), p2 = ey();

        function g2(e, t) {
            return p2(e, d2(f2(t)))
        }

        ty.exports = g2
    });
    var iy = c((zH, ny) => {
        var h2 = Gn(), v2 = Vn(), E2 = Nr(), y2 = _e(), m2 = Rt(), _2 = Pn(), b2 = Dn(), T2 = Mn(), I2 = "[object Map]",
            O2 = "[object Set]", A2 = Object.prototype, x2 = A2.hasOwnProperty;

        function w2(e) {
            if (e == null) return !0;
            if (m2(e) && (y2(e) || typeof e == "string" || typeof e.splice == "function" || _2(e) || T2(e) || E2(e))) return !e.length;
            var t = v2(e);
            if (t == I2 || t == O2) return !e.size;
            if (b2(e)) return !h2(e).length;
            for (var r in e) if (x2.call(e, r)) return !1;
            return !0
        }

        ny.exports = w2
    });
    var ay = c((KH, oy) => {
        var S2 = za(), C2 = qa(), R2 = Tt();

        function L2(e, t) {
            var r = {};
            return t = R2(t, 3), C2(e, function (n, i, o) {
                S2(r, i, t(n, i, o))
            }), r
        }

        oy.exports = L2
    });
    var uy = c((YH, sy) => {
        function N2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;) ;
            return e
        }

        sy.exports = N2
    });
    var ly = c(($H, cy) => {
        var P2 = Wn();

        function q2(e) {
            return typeof e == "function" ? e : P2
        }

        cy.exports = q2
    });
    var dy = c((QH, fy) => {
        var F2 = uy(), M2 = Fa(), D2 = ly(), G2 = _e();

        function V2(e, t) {
            var r = G2(e) ? F2 : M2;
            return r(e, D2(t))
        }

        fy.exports = V2
    });
    var gy = c((ZH, py) => {
        var U2 = je(), B2 = function () {
            return U2.Date.now()
        };
        py.exports = B2
    });
    var Ey = c((JH, vy) => {
        var k2 = it(), Ka = gy(), hy = Hn(), X2 = "Expected a function", W2 = Math.max, H2 = Math.min;

        function j2(e, t, r) {
            var n, i, o, a, s, u, f = 0, E = !1, g = !1, p = !0;
            if (typeof e != "function") throw new TypeError(X2);
            t = hy(t) || 0, k2(r) && (E = !!r.leading, g = "maxWait" in r, o = g ? W2(hy(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);

            function A(N) {
                var k = n, X = i;
                return n = i = void 0, f = N, a = e.apply(X, k), a
            }

            function S(N) {
                return f = N, s = setTimeout(I, t), E ? A(N) : a
            }

            function T(N) {
                var k = N - u, X = N - f, H = t - k;
                return g ? H2(H, o - X) : H
            }

            function C(N) {
                var k = N - u, X = N - f;
                return u === void 0 || k >= t || k < 0 || g && X >= o
            }

            function I() {
                var N = Ka();
                if (C(N)) return L(N);
                s = setTimeout(I, T(N))
            }

            function L(N) {
                return s = void 0, p && n ? A(N) : (n = i = void 0, a)
            }

            function R() {
                s !== void 0 && clearTimeout(s), f = 0, n = u = i = s = void 0
            }

            function D() {
                return s === void 0 ? a : L(Ka())
            }

            function M() {
                var N = Ka(), k = C(N);
                if (n = arguments, i = this, u = N, k) {
                    if (s === void 0) return S(u);
                    if (g) return clearTimeout(s), s = setTimeout(I, t), A(u)
                }
                return s === void 0 && (s = setTimeout(I, t)), a
            }

            return M.cancel = R, M.flush = D, M
        }

        vy.exports = j2
    });
    var my = c((ej, yy) => {
        var z2 = Ey(), K2 = it(), Y2 = "Expected a function";

        function $2(e, t, r) {
            var n = !0, i = !0;
            if (typeof e != "function") throw new TypeError(Y2);
            return K2(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), z2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }

        yy.exports = $2
    });
    var by = {};
    Ne(by, {
        actionListPlaybackChanged: () => dr,
        animationFrameChanged: () => ui,
        clearRequested: () => bG,
        elementStateChanged: () => rs,
        eventListenerAdded: () => si,
        eventStateChanged: () => Ja,
        instanceAdded: () => es,
        instanceRemoved: () => ts,
        instanceStarted: () => ci,
        mediaQueriesDefined: () => is,
        parameterChanged: () => fr,
        playbackRequested: () => mG,
        previewRequested: () => yG,
        rawDataImported: () => Ya,
        sessionInitialized: () => $a,
        sessionStarted: () => Qa,
        sessionStopped: () => Za,
        stopRequested: () => _G,
        testFrameRendered: () => TG,
        viewportWidthChanged: () => ns
    });
    var _y, Q2, Z2, J2, eG, tG, rG, nG, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, gG, hG, vG, EG, Ya, $a, Qa, Za, yG, mG,
        _G, bG, si, TG, Ja, ui, fr, es, ci, ts, rs, dr, ns, is, li = fe(() => {
            "use strict";
            qe();
            _y = ie(Ft()), {
                IX2_RAW_DATA_IMPORTED: Q2,
                IX2_SESSION_INITIALIZED: Z2,
                IX2_SESSION_STARTED: J2,
                IX2_SESSION_STOPPED: eG,
                IX2_PREVIEW_REQUESTED: tG,
                IX2_PLAYBACK_REQUESTED: rG,
                IX2_STOP_REQUESTED: nG,
                IX2_CLEAR_REQUESTED: iG,
                IX2_EVENT_LISTENER_ADDED: oG,
                IX2_TEST_FRAME_RENDERED: aG,
                IX2_EVENT_STATE_CHANGED: sG,
                IX2_ANIMATION_FRAME_CHANGED: uG,
                IX2_PARAMETER_CHANGED: cG,
                IX2_INSTANCE_ADDED: lG,
                IX2_INSTANCE_STARTED: fG,
                IX2_INSTANCE_REMOVED: dG,
                IX2_ELEMENT_STATE_CHANGED: pG,
                IX2_ACTION_LIST_PLAYBACK_CHANGED: gG,
                IX2_VIEWPORT_WIDTH_CHANGED: hG,
                IX2_MEDIA_QUERIES_DEFINED: vG
            } = ye, {reifyState: EG} = _y.IX2VanillaUtils, Ya = e => ({
                type: Q2,
                payload: {...EG(e)}
            }), $a = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
                type: Z2,
                payload: {hasBoundaryNodes: e, reducedMotion: t}
            }), Qa = () => ({type: J2}), Za = () => ({type: eG}), yG = ({rawData: e, defer: t}) => ({
                type: tG,
                payload: {defer: t, rawData: e}
            }), mG = ({
                          actionTypeId: e = Pe.GENERAL_START_ACTION,
                          actionListId: t,
                          actionItemId: r,
                          eventId: n,
                          allowEvents: i,
                          immediate: o,
                          testManual: a,
                          verbose: s,
                          rawData: u
                      }) => ({
                type: rG,
                payload: {
                    actionTypeId: e,
                    actionListId: t,
                    actionItemId: r,
                    testManual: a,
                    eventId: n,
                    allowEvents: i,
                    immediate: o,
                    verbose: s,
                    rawData: u
                }
            }), _G = e => ({type: nG, payload: {actionListId: e}}), bG = () => ({type: iG}), si = (e, t) => ({
                type: oG,
                payload: {target: e, listenerParams: t}
            }), TG = (e = 1) => ({type: aG, payload: {step: e}}), Ja = (e, t) => ({
                type: sG,
                payload: {stateKey: e, newState: t}
            }), ui = (e, t) => ({type: uG, payload: {now: e, parameters: t}}), fr = (e, t) => ({
                type: cG,
                payload: {key: e, value: t}
            }), es = e => ({type: lG, payload: {...e}}), ci = (e, t) => ({
                type: fG,
                payload: {instanceId: e, time: t}
            }), ts = e => ({type: dG, payload: {instanceId: e}}), rs = (e, t, r, n) => ({
                type: pG,
                payload: {elementId: e, actionTypeId: t, current: r, actionItem: n}
            }), dr = ({actionListId: e, isPlaying: t}) => ({
                type: gG,
                payload: {actionListId: e, isPlaying: t}
            }), ns = ({width: e, mediaQueries: t}) => ({
                type: hG,
                payload: {width: e, mediaQueries: t}
            }), is = () => ({type: vG})
        });
    var Re = {};
    Ne(Re, {
        elementContains: () => ss,
        getChildElements: () => NG,
        getClosestElement: () => Yr,
        getProperty: () => wG,
        getQuerySelector: () => as,
        getRefType: () => us,
        getSiblingElements: () => PG,
        getStyle: () => xG,
        getValidDocument: () => CG,
        isSiblingNode: () => LG,
        matchSelector: () => SG,
        queryDocument: () => RG,
        setStyle: () => AG
    });

    function AG(e, t, r) {
        e.style[t] = r
    }

    function xG(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function wG(e, t) {
        return e[t]
    }

    function SG(e) {
        return t => t[os](e)
    }

    function as({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(Ty) !== -1) {
                let n = e.split(Ty), i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(Oy)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function CG(e) {
        return e == null || e === document.documentElement.getAttribute(Oy) ? document : null
    }

    function RG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ss(e, t) {
        return e.contains(t)
    }

    function LG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function NG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r], {length: o} = i;
            if (o) for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function PG(e = []) {
        let t = [], r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function us(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? IG : OG : null
    }

    var Iy, os, Ty, IG, OG, Oy, Yr, Ay = fe(() => {
        "use strict";
        Iy = ie(Ft());
        qe();
        ({ELEMENT_MATCHES: os} = Iy.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ty,
            HTML_ELEMENT: IG,
            PLAIN_OBJECT: OG,
            WF_PAGE: Oy
        } = Oe;
        Yr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[os] && r[os](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var cs = c((nj, wy) => {
        var qG = it(), xy = Object.create, FG = function () {
            function e() {
            }

            return function (t) {
                if (!qG(t)) return {};
                if (xy) return xy(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
        wy.exports = FG
    });
    var fi = c((ij, Sy) => {
        function MG() {
        }

        Sy.exports = MG
    });
    var pi = c((oj, Cy) => {
        var DG = cs(), GG = fi();

        function di(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }

        di.prototype = DG(GG.prototype);
        di.prototype.constructor = di;
        Cy.exports = di
    });
    var Py = c((aj, Ny) => {
        var Ry = Xt(), VG = Nr(), UG = _e(), Ly = Ry ? Ry.isConcatSpreadable : void 0;

        function BG(e) {
            return UG(e) || VG(e) || !!(Ly && e && e[Ly])
        }

        Ny.exports = BG
    });
    var My = c((sj, Fy) => {
        var kG = Nn(), XG = Py();

        function qy(e, t, r, n, i) {
            var o = -1, a = e.length;
            for (r || (r = XG), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? qy(s, t - 1, r, n, i) : kG(i, s) : n || (i[i.length] = s)
            }
            return i
        }

        Fy.exports = qy
    });
    var Gy = c((uj, Dy) => {
        var WG = My();

        function HG(e) {
            var t = e == null ? 0 : e.length;
            return t ? WG(e, 1) : []
        }

        Dy.exports = HG
    });
    var Uy = c((cj, Vy) => {
        function jG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }

        Vy.exports = jG
    });
    var Xy = c((lj, ky) => {
        var zG = Uy(), By = Math.max;

        function KG(e, t, r) {
            return t = By(t === void 0 ? e.length - 1 : t, 0), function () {
                for (var n = arguments, i = -1, o = By(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                return s[t] = r(a), zG(e, this, s)
            }
        }

        ky.exports = KG
    });
    var Hy = c((fj, Wy) => {
        function YG(e) {
            return function () {
                return e
            }
        }

        Wy.exports = YG
    });
    var Ky = c((dj, zy) => {
        var $G = Hy(), jy = ja(), QG = Wn(), ZG = jy ? function (e, t) {
            return jy(e, "toString", {configurable: !0, enumerable: !1, value: $G(t), writable: !0})
        } : QG;
        zy.exports = ZG
    });
    var $y = c((pj, Yy) => {
        var JG = 800, eV = 16, tV = Date.now;

        function rV(e) {
            var t = 0, r = 0;
            return function () {
                var n = tV(), i = eV - (n - r);
                if (r = n, i > 0) {
                    if (++t >= JG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }

        Yy.exports = rV
    });
    var Zy = c((gj, Qy) => {
        var nV = Ky(), iV = $y(), oV = iV(nV);
        Qy.exports = oV
    });
    var em = c((hj, Jy) => {
        var aV = Gy(), sV = Xy(), uV = Zy();

        function cV(e) {
            return uV(sV(e, void 0, aV), e + "")
        }

        Jy.exports = cV
    });
    var nm = c((vj, rm) => {
        var tm = ta(), lV = tm && new tm;
        rm.exports = lV
    });
    var om = c((Ej, im) => {
        function fV() {
        }

        im.exports = fV
    });
    var ls = c((yj, sm) => {
        var am = nm(), dV = om(), pV = am ? function (e) {
            return am.get(e)
        } : dV;
        sm.exports = pV
    });
    var cm = c((mj, um) => {
        var gV = {};
        um.exports = gV
    });
    var fs = c((_j, fm) => {
        var lm = cm(), hV = Object.prototype, vV = hV.hasOwnProperty;

        function EV(e) {
            for (var t = e.name + "", r = lm[t], n = vV.call(lm, t) ? r.length : 0; n--;) {
                var i = r[n], o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }

        fm.exports = EV
    });
    var hi = c((bj, dm) => {
        var yV = cs(), mV = fi(), _V = 4294967295;

        function gi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _V, this.__views__ = []
        }

        gi.prototype = yV(mV.prototype);
        gi.prototype.constructor = gi;
        dm.exports = gi
    });
    var gm = c((Tj, pm) => {
        function bV(e, t) {
            var r = -1, n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }

        pm.exports = bV
    });
    var vm = c((Ij, hm) => {
        var TV = hi(), IV = pi(), OV = gm();

        function AV(e) {
            if (e instanceof TV) return e.clone();
            var t = new IV(e.__wrapped__, e.__chain__);
            return t.__actions__ = OV(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }

        hm.exports = AV
    });
    var mm = c((Oj, ym) => {
        var xV = hi(), Em = pi(), wV = fi(), SV = _e(), CV = ft(), RV = vm(), LV = Object.prototype,
            NV = LV.hasOwnProperty;

        function vi(e) {
            if (CV(e) && !SV(e) && !(e instanceof xV)) {
                if (e instanceof Em) return e;
                if (NV.call(e, "__wrapped__")) return RV(e)
            }
            return new Em(e)
        }

        vi.prototype = wV.prototype;
        vi.prototype.constructor = vi;
        ym.exports = vi
    });
    var bm = c((Aj, _m) => {
        var PV = hi(), qV = ls(), FV = fs(), MV = mm();

        function DV(e) {
            var t = FV(e), r = MV[t];
            if (typeof r != "function" || !(t in PV.prototype)) return !1;
            if (e === r) return !0;
            var n = qV(r);
            return !!n && e === n[0]
        }

        _m.exports = DV
    });
    var Am = c((xj, Om) => {
        var Tm = pi(), GV = em(), VV = ls(), ds = fs(), UV = _e(), Im = bm(), BV = "Expected a function", kV = 8,
            XV = 32, WV = 128, HV = 256;

        function jV(e) {
            return GV(function (t) {
                var r = t.length, n = r, i = Tm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(BV);
                    if (i && !a && ds(o) == "wrapper") var a = new Tm([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = ds(o), u = s == "wrapper" ? VV(o) : void 0;
                    u && Im(u[0]) && u[1] == (WV | kV | XV | HV) && !u[4].length && u[9] == 1 ? a = a[ds(u[0])].apply(a, u[3]) : a = o.length == 1 && Im(o) ? a[s]() : a.thru(o)
                }
                return function () {
                    var f = arguments, E = f[0];
                    if (a && f.length == 1 && UV(E)) return a.plant(E).value();
                    for (var g = 0, p = r ? t[g].apply(this, f) : E; ++g < r;) p = t[g].call(this, p);
                    return p
                }
            })
        }

        Om.exports = jV
    });
    var wm = c((wj, xm) => {
        var zV = Am(), KV = zV();
        xm.exports = KV
    });
    var Cm = c((Sj, Sm) => {
        function YV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }

        Sm.exports = YV
    });
    var Lm = c((Cj, Rm) => {
        var $V = Cm(), ps = Hn();

        function QV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ps(r), r = r === r ? r : 0), t !== void 0 && (t = ps(t), t = t === t ? t : 0), $V(ps(e), t, r)
        }

        Rm.exports = QV
    });
    var Um, Bm, km, Xm, ZV, JV, eU, tU, rU, nU, iU, oU, aU, sU, uU, cU, lU, fU, dU, Wm, Hm, pU, gU, hU, jm, vU, EU, zm,
        yU, gs, Km, Nm, Pm, Ym, Qr, mU, st, $m, _U, Me, Ye, Zr, Qm, hs, qm, vs, bU, $r, TU, IU, OU, Zm, Fm, AU, Mm, xU,
        wU, SU, Dm, Ei, yi, Gm, Vm, Jm, e_ = fe(() => {
            "use strict";
            Um = ie(wm()), Bm = ie(Xn()), km = ie(Lm());
            qe();
            Es();
            li();
            Xm = ie(Ft()), {
                MOUSE_CLICK: ZV,
                MOUSE_SECOND_CLICK: JV,
                MOUSE_DOWN: eU,
                MOUSE_UP: tU,
                MOUSE_OVER: rU,
                MOUSE_OUT: nU,
                DROPDOWN_CLOSE: iU,
                DROPDOWN_OPEN: oU,
                SLIDER_ACTIVE: aU,
                SLIDER_INACTIVE: sU,
                TAB_ACTIVE: uU,
                TAB_INACTIVE: cU,
                NAVBAR_CLOSE: lU,
                NAVBAR_OPEN: fU,
                MOUSE_MOVE: dU,
                PAGE_SCROLL_DOWN: Wm,
                SCROLL_INTO_VIEW: Hm,
                SCROLL_OUT_OF_VIEW: pU,
                PAGE_SCROLL_UP: gU,
                SCROLLING_IN_VIEW: hU,
                PAGE_FINISH: jm,
                ECOMMERCE_CART_CLOSE: vU,
                ECOMMERCE_CART_OPEN: EU,
                PAGE_START: zm,
                PAGE_SCROLL: yU
            } = ze, gs = "COMPONENT_ACTIVE", Km = "COMPONENT_INACTIVE", {COLON_DELIMITER: Nm} = Oe, {getNamespacedParameterId: Pm} = Xm.IX2VanillaUtils, Ym = e => t => typeof t == "object" && e(t) ? !0 : t, Qr = Ym(({
                                                                                                                                                                                                                            element: e,
                                                                                                                                                                                                                            nativeEvent: t
                                                                                                                                                                                                                        }) => e === t.target), mU = Ym(({
                                                                                                                                                                                                                                                            element: e,
                                                                                                                                                                                                                                                            nativeEvent: t
                                                                                                                                                                                                                                                        }) => e.contains(t.target)), st = (0, Um.default)([Qr, mU]), $m = (e, t) => {
                if (t) {
                    let {ixData: r} = e.getState(), {events: n} = r, i = n[t];
                    if (i && !bU[i.eventTypeId]) return i
                }
                return null
            }, _U = ({store: e, event: t}) => {
                let {action: r} = t, {autoStopEventId: n} = r.config;
                return !!$m(e, n)
            }, Me = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
                let {action: o, id: a} = t, {actionListId: s, autoStopEventId: u} = o.config, f = $m(e, u);
                return f && pr({
                    store: e,
                    eventId: u,
                    eventTarget: r,
                    eventStateKey: u + Nm + n.split(Nm)[1],
                    actionListId: (0, Bm.default)(f, "action.config.actionListId")
                }), pr({store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: s}), Jr({
                    store: e,
                    eventId: a,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: s
                }), i
            }, Ye = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Zr = {handler: Ye(st, Me)}, Qm = {
                ...Zr,
                types: [gs, Km].join(" ")
            }, hs = [{target: window, types: "resize orientationchange", throttle: !0}, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], qm = "mouseover mouseout", vs = {types: hs}, bU = {PAGE_START: zm, PAGE_FINISH: jm}, $r = (() => {
                let e = window.pageXOffset !== void 0,
                    r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                    scrollTop: e ? window.pageYOffset : r.scrollTop,
                    stiffScrollTop: (0, km.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                    scrollWidth: r.scrollWidth,
                    scrollHeight: r.scrollHeight,
                    clientWidth: r.clientWidth,
                    clientHeight: r.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), TU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), IU = ({
                                                                                                                            element: e,
                                                                                                                            nativeEvent: t
                                                                                                                        }) => {
                let {type: r, target: n, relatedTarget: i} = t, o = e.contains(n);
                if (r === "mouseover" && o) return !0;
                let a = e.contains(i);
                return !!(r === "mouseout" && o && a)
            }, OU = e => {
                let {element: t, event: {config: r}} = e, {clientWidth: n, clientHeight: i} = $r(), o = r.scrollOffsetValue,
                    u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
                return TU(t.getBoundingClientRect(), {left: 0, top: u, right: n, bottom: i - u})
            }, Zm = e => (t, r) => {
                let {type: n} = t.nativeEvent, i = [gs, Km].indexOf(n) !== -1 ? n === gs : r.isActive,
                    o = {...r, isActive: i};
                return (!r || o.isActive !== r.isActive) && e(t, o) || o
            }, Fm = e => (t, r) => {
                let n = {elementHovered: IU(t)};
                return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
            }, AU = e => (t, r) => {
                let n = {...r, elementVisible: OU(t)};
                return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
            }, Mm = e => (t, r = {}) => {
                let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = $r(), {
                        event: {
                            config: a,
                            eventTypeId: s
                        }
                    } = t, {scrollOffsetValue: u, scrollOffsetUnit: f} = a, E = f === "PX", g = i - o,
                    p = Number((n / g).toFixed(2));
                if (r && r.percentTop === p) return r;
                let A = (E ? u : o * (u || 0) / 100) / g, S, T, C = 0;
                r && (S = p > r.percentTop, T = r.scrollingDown !== S, C = T ? p : r.anchorTop);
                let I = s === Wm ? p >= C + A : p <= C - A,
                    L = {...r, percentTop: p, inBounds: I, anchorTop: C, scrollingDown: S};
                return r && I && (T || L.inBounds !== r.inBounds) && e(t, L) || L
            }, xU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, wU = e => (t, r) => {
                let n = {finished: document.readyState === "complete"};
                return n.finished && !(r && r.finshed) && e(t), n
            }, SU = e => (t, r) => {
                let n = {started: !0};
                return r || e(t), n
            }, Dm = e => (t, r = {clickCount: 0}) => {
                let n = {clickCount: r.clickCount % 2 + 1};
                return n.clickCount !== r.clickCount && e(t, n) || n
            }, Ei = (e = !0) => ({
                ...Qm,
                handler: Ye(e ? st : Qr, Zm((t, r) => r.isActive ? Zr.handler(t, r) : r))
            }), yi = (e = !0) => ({
                ...Qm,
                handler: Ye(e ? st : Qr, Zm((t, r) => r.isActive ? r : Zr.handler(t, r)))
            }), Gm = {
                ...vs, handler: AU((e, t) => {
                    let {elementVisible: r} = t, {event: n, store: i} = e, {ixData: o} = i.getState(), {events: a} = o;
                    return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Hm === r ? (Me(e), {
                        ...t,
                        triggered: !0
                    }) : t
                })
            }, Vm = .05, Jm = {
                [aU]: Ei(),
                [sU]: yi(),
                [oU]: Ei(),
                [iU]: yi(),
                [fU]: Ei(!1),
                [lU]: yi(!1),
                [uU]: Ei(),
                [cU]: yi(),
                [EU]: {types: "ecommerce-cart-open", handler: Ye(st, Me)},
                [vU]: {types: "ecommerce-cart-close", handler: Ye(st, Me)},
                [ZV]: {
                    types: "click", handler: Ye(st, Dm((e, {clickCount: t}) => {
                        _U(e) ? t === 1 && Me(e) : Me(e)
                    }))
                },
                [JV]: {
                    types: "click", handler: Ye(st, Dm((e, {clickCount: t}) => {
                        t === 2 && Me(e)
                    }))
                },
                [eU]: {...Zr, types: "mousedown"},
                [tU]: {...Zr, types: "mouseup"},
                [rU]: {
                    types: qm, handler: Ye(st, Fm((e, t) => {
                        t.elementHovered && Me(e)
                    }))
                },
                [nU]: {
                    types: qm, handler: Ye(st, Fm((e, t) => {
                        t.elementHovered || Me(e)
                    }))
                },
                [dU]: {
                    types: "mousemove mouseout scroll",
                    handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                                basedOn: a,
                                selectedAxis: s,
                                continuousParameterGroupId: u,
                                reverse: f,
                                restingState: E = 0
                            } = r, {clientX: g = o.clientX, clientY: p = o.clientY, pageX: A = o.pageX, pageY: S = o.pageY} = n,
                            T = s === "X_AXIS", C = n.type === "mouseout", I = E / 100, L = u, R = !1;
                        switch (a) {
                            case nt.VIEWPORT: {
                                I = T ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break
                            }
                            case nt.PAGE: {
                                let {scrollLeft: D, scrollTop: M, scrollWidth: N, scrollHeight: k} = $r();
                                I = T ? Math.min(D + A, N) / N : Math.min(M + S, k) / k;
                                break
                            }
                            case nt.ELEMENT:
                            default: {
                                L = Pm(i, u);
                                let D = n.type.indexOf("mouse") === 0;
                                if (D && st({element: t, nativeEvent: n}) !== !0) break;
                                let M = t.getBoundingClientRect(), {left: N, top: k, width: X, height: H} = M;
                                if (!D && !xU({left: g, top: p}, M)) break;
                                R = !0, I = T ? (g - N) / X : (p - k) / H;
                                break
                            }
                        }
                        return C && (I > 1 - Vm || I < Vm) && (I = Math.round(I)), (a !== nt.ELEMENT || R || R !== o.elementHovered) && (I = f ? 1 - I : I, e.dispatch(fr(L, I))), {
                            elementHovered: R,
                            clientX: g,
                            clientY: p,
                            pageX: A,
                            pageY: S
                        }
                    }
                },
                [yU]: {
                    types: hs, handler: ({store: e, eventConfig: t}) => {
                        let {continuousParameterGroupId: r, reverse: n} = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: a
                        } = $r(), s = i / (o - a);
                        s = n ? 1 - s : s, e.dispatch(fr(r, s))
                    }
                },
                [hU]: {
                    types: hs,
                    handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i = {scrollPercent: 0}) => {
                        let {
                            scrollLeft: o,
                            scrollTop: a,
                            scrollWidth: s,
                            scrollHeight: u,
                            clientHeight: f
                        } = $r(), {
                            basedOn: E,
                            selectedAxis: g,
                            continuousParameterGroupId: p,
                            startsEntering: A,
                            startsExiting: S,
                            addEndOffset: T,
                            addStartOffset: C,
                            addOffsetValue: I = 0,
                            endOffsetValue: L = 0
                        } = r, R = g === "X_AXIS";
                        if (E === nt.VIEWPORT) {
                            let D = R ? o / s : a / u;
                            return D !== i.scrollPercent && t.dispatch(fr(p, D)), {scrollPercent: D}
                        } else {
                            let D = Pm(n, p), M = e.getBoundingClientRect(), N = (C ? I : 0) / 100, k = (T ? L : 0) / 100;
                            N = A ? N : 1 - N, k = S ? k : 1 - k;
                            let X = M.top + Math.min(M.height * N, f), Y = M.top + M.height * k - X, Q = Math.min(f + Y, u),
                                O = Math.min(Math.max(0, f - X), Q) / Q;
                            return O !== i.scrollPercent && t.dispatch(fr(D, O)), {scrollPercent: O}
                        }
                    }
                },
                [Hm]: Gm,
                [pU]: Gm,
                [Wm]: {
                    ...vs, handler: Mm((e, t) => {
                        t.scrollingDown && Me(e)
                    })
                },
                [gU]: {
                    ...vs, handler: Mm((e, t) => {
                        t.scrollingDown || Me(e)
                    })
                },
                [jm]: {types: "readystatechange IX2_PAGE_UPDATE", handler: Ye(Qr, wU(Me))},
                [zm]: {types: "readystatechange IX2_PAGE_UPDATE", handler: Ye(Qr, SU(Me))}
            }
        });
    var E_ = {};
    Ne(E_, {
        observeRequests: () => KU,
        startActionGroup: () => Jr,
        startEngine: () => Oi,
        stopActionGroup: () => pr,
        stopAllActionGroups: () => g_,
        stopEngine: () => Ai
    });

    function KU(e) {
        Mt({store: e, select: ({ixRequest: t}) => t.preview, onChange: QU}), Mt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: ZU
        }), Mt({store: e, select: ({ixRequest: t}) => t.stop, onChange: JU}), Mt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: eB
        })
    }

    function YU(e) {
        Mt({
            store: e, select: ({ixSession: t}) => t.mediaQueryKey, onChange: () => {
                Ai(e), l_({store: e, elementApi: Re}), Oi({store: e, allowEvents: !0}), f_()
            }
        })
    }

    function $U(e, t) {
        let r = Mt({
            store: e, select: ({ixSession: n}) => n.tick, onChange: n => {
                t(n), r()
            }
        })
    }

    function QU({rawData: e, defer: t}, r) {
        let n = () => {
            Oi({store: r, rawData: e, allowEvents: !0}), f_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function f_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function ZU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: f = !0
        } = e, {rawData: E} = e;
        if (n && i && E && s) {
            let g = E.actionLists[n];
            g && (E = DU({actionList: g, actionItemId: i, rawData: E}))
        }
        if (Oi({store: t, rawData: E, allowEvents: a, testManual: u}), n && r === Pe.GENERAL_START_ACTION || ys(r)) {
            pr({store: t, actionListId: n}), p_({store: t, actionListId: n, eventId: o});
            let g = Jr({store: t, eventId: o, actionListId: n, immediate: s, verbose: f});
            f && g && t.dispatch(dr({actionListId: n, isPlaying: !s}))
        }
    }

    function JU({actionListId: e}, t) {
        e ? pr({store: t, actionListId: e}) : g_({store: t}), Ai(t)
    }

    function eB(e, t) {
        Ai(t), l_({store: t, elementApi: Re})
    }

    function Oi({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(Ya(t)), i.active || (e.dispatch($a({
            hasBoundaryNodes: !!document.querySelector(_i),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (aB(e), tB(), e.getState().ixSession.hasDefinedMediaQueries && YU(e)), e.dispatch(Qa()), rB(e, n))
    }

    function tB() {
        let {documentElement: e} = document;
        e.className.indexOf(t_) === -1 && (e.className += ` ${t_}`)
    }

    function rB(e, t) {
        let r = n => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(ui(n, o)), t ? $U(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ai(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(nB), BU(), e.dispatch(Za())
        }
    }

    function nB({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }

    function iB({
                    store: e,
                    eventStateKey: t,
                    eventTarget: r,
                    eventId: n,
                    eventConfig: i,
                    actionListId: o,
                    parameterGroup: a,
                    smoothing: s,
                    restingValue: u
                }) {
        let {ixData: f, ixSession: E} = e.getState(), {events: g} = f, p = g[n], {eventTypeId: A} = p, S = {}, T = {},
            C = [], {continuousActionGroups: I} = a, {id: L} = a;
        GU(A, i) && (L = VU(t, L));
        let R = E.hasBoundaryNodes && r ? Yr(r, _i) : null;
        I.forEach(D => {
            let {keyframe: M, actionItems: N} = D;
            N.forEach(k => {
                let {actionTypeId: X} = k, {target: H} = k.config;
                if (!H) return;
                let Y = H.boundaryMode ? R : null, Q = kU(H) + ms + X;
                if (T[Q] = oB(T[Q], M, k), !S[Q]) {
                    S[Q] = !0;
                    let {config: q} = k;
                    bi({config: q, event: p, eventTarget: r, elementRoot: Y, elementApi: Re}).forEach(O => {
                        C.push({element: O, key: Q})
                    })
                }
            })
        }), C.forEach(({element: D, key: M}) => {
            let N = T[M], k = (0, ht.default)(N, "[0].actionItems[0]", {}), {actionTypeId: X} = k,
                H = Ii(X) ? bs(X)(D, k) : null, Y = _s({element: D, actionItem: k, elementApi: Re}, H);
            Ts({
                store: e,
                element: D,
                eventId: n,
                actionListId: o,
                actionItem: k,
                destination: Y,
                continuous: !0,
                parameterId: L,
                actionGroups: N,
                smoothing: s,
                restingValue: u,
                pluginInstance: H
            })
        })
    }

    function oB(e = [], t, r) {
        let n = [...e], i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function aB(e) {
        let {ixData: t} = e.getState(), {eventTypeMap: r} = t;
        d_(e), (0, gr.default)(r, (i, o) => {
            let a = Jm[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            dB({logic: a, store: e, events: i})
        });
        let {ixSession: n} = e.getState();
        n.eventListeners.length && uB(e)
    }

    function uB(e) {
        let t = () => {
            d_(e)
        };
        sB.forEach(r => {
            window.addEventListener(r, t), e.dispatch(si(window, [r, t]))
        }), t()
    }

    function d_(e) {
        let {ixSession: t, ixData: r} = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(ns({width: n, mediaQueries: i}))
        }
    }

    function dB({logic: e, store: t, events: r}) {
        pB(r);
        let {types: n, handler: i} = e, {ixData: o} = t.getState(), {actionLists: a} = o, s = cB(r, fB);
        if (!(0, i_.default)(s)) return;
        (0, gr.default)(s, (g, p) => {
            let A = r[p], {action: S, id: T, mediaQueries: C = o.mediaQueryKeys} = A, {actionListId: I} = S.config;
            XU(C, o.mediaQueryKeys) || t.dispatch(is()), S.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(A.config) ? A.config : [A.config]).forEach(R => {
                let {continuousParameterGroupId: D} = R, M = (0, ht.default)(a, `${I}.continuousParameterGroups`, []),
                    N = (0, n_.default)(M, ({id: H}) => H === D), k = (R.smoothing || 0) / 100,
                    X = (R.restingState || 0) / 100;
                N && g.forEach((H, Y) => {
                    let Q = T + ms + Y;
                    iB({
                        store: t,
                        eventStateKey: Q,
                        eventTarget: H,
                        eventId: T,
                        eventConfig: R,
                        actionListId: I,
                        parameterGroup: N,
                        smoothing: k,
                        restingValue: X
                    })
                })
            }), (S.actionTypeId === Pe.GENERAL_START_ACTION || ys(S.actionTypeId)) && p_({
                store: t,
                actionListId: I,
                eventId: T
            })
        });
        let u = g => {
            let {ixSession: p} = t.getState();
            lB(s, (A, S, T) => {
                let C = r[S], I = p.eventState[T], {action: L, mediaQueries: R = o.mediaQueryKeys} = C;
                if (!Ti(R, p.mediaQueryKey)) return;
                let D = (M = {}) => {
                    let N = i({store: t, element: A, event: C, eventConfig: M, nativeEvent: g, eventStateKey: T}, I);
                    WU(N, I) || t.dispatch(Ja(T, N))
                };
                L.actionTypeId === Pe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(C.config) ? C.config : [C.config]).forEach(D) : D()
            })
        }, f = (0, u_.default)(u, zU), E = ({target: g = document, types: p, throttle: A}) => {
            p.split(" ").filter(Boolean).forEach(S => {
                let T = A ? f : u;
                g.addEventListener(S, T), t.dispatch(si(g, [S, T]))
            })
        };
        Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e)
    }

    function pB(e) {
        if (!jU) return;
        let t = {}, r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n], a = as(o);
            t[a] || (i === ze.MOUSE_CLICK || i === ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function p_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState(), {actionLists: o, events: a} = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
                E = (0, ht.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Ti(E, i.mediaQueryKey)) return;
            f.forEach(g => {
                let {config: p, actionTypeId: A} = g,
                    S = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                        target: s.target,
                        targets: s.targets
                    } : p, T = bi({config: S, event: s, elementApi: Re}), C = Ii(A);
                T.forEach(I => {
                    let L = C ? bs(A)(I, g) : null;
                    Ts({
                        destination: _s({element: I, actionItem: g, elementApi: Re}, L),
                        immediate: !0,
                        store: e,
                        element: I,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: L
                    })
                })
            })
        }
    }

    function g_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0, gr.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                Is(r, e), i && e.dispatch(dr({actionListId: n, isPlaying: !1}))
            }
        })
    }

    function pr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState(), s = a.hasBoundaryNodes && r ? Yr(r, _i) : null;
        (0, gr.default)(o, u => {
            let f = (0, ht.default)(u, "actionItem.config.target.boundaryMode"), E = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && E) {
                if (s && f && !ss(s, u.element)) return;
                Is(u, e), u.verbose && e.dispatch(dr({actionListId: i, isPlaying: !1}))
            }
        })
    }

    function Jr({
                    store: e,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o = 0,
                    immediate: a,
                    verbose: s
                }) {
        let {ixData: u, ixSession: f} = e.getState(), {events: E} = u,
            g = E[t] || {}, {mediaQueries: p = u.mediaQueryKeys} = g,
            A = (0, ht.default)(u, `actionLists.${i}`, {}), {actionItemGroups: S, useFirstGroupAsInitialState: T} = A;
        if (!S || !S.length) return !1;
        o >= S.length && (0, ht.default)(g, "config.loop") && (o = 0), o === 0 && T && o++;
        let I = (o === 0 || o === 1 && T) && ys(g.action?.actionTypeId) ? g.config.delay : void 0,
            L = (0, ht.default)(S, [o, "actionItems"], []);
        if (!L.length || !Ti(p, f.mediaQueryKey)) return !1;
        let R = f.hasBoundaryNodes && r ? Yr(r, _i) : null, D = qU(L), M = !1;
        return L.forEach((N, k) => {
            let {config: X, actionTypeId: H} = N, Y = Ii(H), {target: Q} = X;
            if (!Q) return;
            let q = Q.boundaryMode ? R : null;
            bi({config: X, event: g, eventTarget: r, elementRoot: q, elementApi: Re}).forEach((P, U) => {
                let V = Y ? bs(H)(P, N) : null, Z = Y ? HU(H)(P, N) : null;
                M = !0;
                let J = D === k && U === 0, F = FU({element: P, actionItem: N}),
                    W = _s({element: P, actionItem: N, elementApi: Re}, V);
                Ts({
                    store: e,
                    element: P,
                    actionItem: N,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: F,
                    destination: W,
                    immediate: a,
                    verbose: s,
                    pluginInstance: V,
                    pluginDuration: Z,
                    instanceDelay: I
                })
            })
        }), M
    }

    function Ts(e) {
        let {store: t, computedStyle: r, ...n} = e, {
                element: i,
                actionItem: o,
                immediate: a,
                pluginInstance: s,
                continuous: u,
                restingValue: f,
                eventId: E
            } = n, g = !u, p = NU(), {ixElements: A, ixSession: S, ixData: T} = t.getState(),
            C = LU(A, i), {refState: I} = A[C] || {}, L = us(i), R = S.reducedMotion && ko[o.actionTypeId], D;
        if (R && u) switch (T.events[E]?.eventTypeId) {
            case ze.MOUSE_MOVE:
            case ze.MOUSE_MOVE_IN_VIEWPORT:
                D = f;
                break;
            default:
                D = .5;
                break
        }
        let M = MU(i, I, r, o, Re, s);
        if (t.dispatch(es({
            instanceId: p,
            elementId: C,
            origin: M,
            refType: L,
            skipMotion: R,
            skipToValue: D, ...n
        })), h_(document.body, "ix2-animation-started", p), a) {
            gB(t, p);
            return
        }
        Mt({store: t, select: ({ixInstances: N}) => N[p], onChange: v_}), g && t.dispatch(ci(p, S.tick))
    }

    function Is(e, t) {
        h_(document.body, "ix2-animation-stopping", {instanceId: e.id, state: t.getState()});
        let {elementId: r, actionItem: n} = e, {ixElements: i} = t.getState(), {ref: o, refType: a} = i[r] || {};
        a === c_ && UU(o, n, Re), t.dispatch(ts(e.id))
    }

    function h_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function gB(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(ci(t, 0)), e.dispatch(ui(performance.now(), r));
        let {ixInstances: n} = e.getState();
        v_(n[t], e)
    }

    function v_(e, t) {
        let {
                active: r,
                continuous: n,
                complete: i,
                elementId: o,
                actionItem: a,
                actionTypeId: s,
                renderType: u,
                current: f,
                groupIndex: E,
                eventId: g,
                eventTarget: p,
                eventStateKey: A,
                actionListId: S,
                isCarrier: T,
                styleProp: C,
                verbose: I,
                pluginInstance: L
            } = e, {ixData: R, ixSession: D} = t.getState(), {events: M} = R,
            N = M[g] || {}, {mediaQueries: k = R.mediaQueryKeys} = N;
        if (Ti(k, D.mediaQueryKey) && (n || r || i)) {
            if (f || u === RU && i) {
                t.dispatch(rs(o, s, f, a));
                let {ixElements: X} = t.getState(), {ref: H, refType: Y, refState: Q} = X[o] || {}, q = Q && Q[s];
                (Y === c_ || Ii(s)) && PU(H, Q, q, g, a, C, Re, u, L)
            }
            if (i) {
                if (T) {
                    let X = Jr({
                        store: t,
                        eventId: g,
                        eventTarget: p,
                        eventStateKey: A,
                        actionListId: S,
                        groupIndex: E + 1,
                        verbose: I
                    });
                    I && !X && t.dispatch(dr({actionListId: S, isPlaying: !1}))
                }
                Is(e, t)
            }
        }
    }

    var n_, ht, i_, o_, a_, s_, gr, u_, mi, CU, ys, ms, _i, c_, RU, t_, bi, LU, _s, Mt, NU, PU, l_, qU, FU, MU, DU, GU,
        VU, Ti, UU, BU, kU, XU, WU, Ii, bs, HU, r_, jU, zU, sB, cB, lB, fB, Es = fe(() => {
            "use strict";
            n_ = ie(Ea()), ht = ie(Xn()), i_ = ie(RE()), o_ = ie(ry()), a_ = ie(iy()), s_ = ie(ay()), gr = ie(dy()), u_ = ie(my());
            qe();
            mi = ie(Ft());
            li();
            Ay();
            e_();
            CU = Object.keys(bn), ys = e => CU.includes(e), {
                COLON_DELIMITER: ms,
                BOUNDARY_SELECTOR: _i,
                HTML_ELEMENT: c_,
                RENDER_GENERAL: RU,
                W_MOD_IX: t_
            } = Oe, {
                getAffectedElements: bi,
                getElementId: LU,
                getDestinationValues: _s,
                observeStore: Mt,
                getInstanceId: NU,
                renderHTMLElement: PU,
                clearAllStyles: l_,
                getMaxDurationItemIndex: qU,
                getComputedStyle: FU,
                getInstanceOrigin: MU,
                reduceListToGroup: DU,
                shouldNamespaceEventParameter: GU,
                getNamespacedParameterId: VU,
                shouldAllowMediaQuery: Ti,
                cleanupHTMLElement: UU,
                clearObjectCache: BU,
                stringifyTarget: kU,
                mediaQueriesEqual: XU,
                shallowEqual: WU
            } = mi.IX2VanillaUtils, {
                isPluginType: Ii,
                createPluginInstance: bs,
                getPluginDuration: HU
            } = mi.IX2VanillaPlugins, r_ = navigator.userAgent, jU = r_.match(/iPad/i) || r_.match(/iPhone/), zU = 12;
            sB = ["resize", "orientationchange"];
            cB = (e, t) => (0, o_.default)((0, s_.default)(e, t), a_.default), lB = (e, t) => {
                (0, gr.default)(e, (r, n) => {
                    r.forEach((i, o) => {
                        let a = n + ms + o;
                        t(i, n, a)
                    })
                })
            }, fB = e => {
                let t = {target: e.target, targets: e.targets};
                return bi({config: t, elementApi: Re})
            }
        });
    var m_ = c(vt => {
        "use strict";
        var hB = un().default, vB = eu().default;
        Object.defineProperty(vt, "__esModule", {value: !0});
        vt.actions = void 0;
        vt.destroy = y_;
        vt.init = bB;
        vt.setEnv = _B;
        vt.store = void 0;
        Vl();
        var EB = Vo(), yB = vB((fE(), Ze(lE))), Os = (Es(), Ze(E_)), mB = hB((li(), Ze(by)));
        vt.actions = mB;
        var As = vt.store = (0, EB.createStore)(yB.default);

        function _B(e) {
            e() && (0, Os.observeRequests)(As)
        }

        function bB(e) {
            y_(), (0, Os.startEngine)({store: As, rawData: e, allowEvents: !0})
        }

        function y_() {
            (0, Os.stopEngine)(As)
        }
    });
    var I_ = c((Gj, T_) => {
        "use strict";
        var __ = et(), b_ = m_();
        b_.setEnv(__.env);
        __.define("ix2", T_.exports = function () {
            return b_
        })
    });
    var A_ = c((Vj, O_) => {
        "use strict";
        var hr = et();
        hr.define("links", O_.exports = function (e, t) {
            var r = {}, n = e(window), i, o = hr.env(), a = window.location, s = document.createElement("a"),
                u = "w--current", f = /index\.(html|php)$/, E = /\/$/, g, p;
            r.ready = r.design = r.preview = A;

            function A() {
                i = o && hr.env("design"), p = hr.env("slug") || a.pathname || "", hr.scroll.off(T), g = [];
                for (var I = document.links, L = 0; L < I.length; ++L) S(I[L]);
                g.length && (hr.scroll.on(T), T())
            }

            function S(I) {
                if (!I.getAttribute("hreflang")) {
                    var L = i && I.getAttribute("href-disabled") || I.getAttribute("href");
                    if (s.href = L, !(L.indexOf(":") >= 0)) {
                        var R = e(I);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var D = e(s.hash);
                            D.length && g.push({link: R, sec: D, active: !1});
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var M = s.href === a.href || L === p || f.test(L) && E.test(p);
                            C(R, u, M)
                        }
                    }
                }
            }

            function T() {
                var I = n.scrollTop(), L = n.height();
                t.each(g, function (R) {
                    if (!R.link.attr("hreflang")) {
                        var D = R.link, M = R.sec, N = M.offset().top, k = M.outerHeight(), X = L * .5,
                            H = M.is(":visible") && N + k - X >= I && N + X <= I + L;
                        R.active !== H && (R.active = H, C(D, u, H))
                    }
                })
            }

            function C(I, L, R) {
                var D = I.hasClass(L);
                R && D || !R && !D || (R ? I.addClass(L) : I.removeClass(L))
            }

            return r
        })
    });
    var w_ = c((Uj, x_) => {
        "use strict";
        var xi = et();
        xi.define("scroll", x_.exports = function (e) {
            var t = {WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll"}, r = window.location,
                n = S() ? null : window.history, i = e(window), o = e(document), a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (q) {
                    window.setTimeout(q, 15)
                }, u = xi.env("editor") ? ".w-editor-body" : "body",
                f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])", E = 'a[href="#"]',
                g = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
                p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}', A = document.createElement("style");
            A.appendChild(document.createTextNode(p));

            function S() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }

            var T = /^#[a-zA-Z0-9][\w:.-]*$/;

            function C(q) {
                return T.test(q.hash) && q.host + q.pathname === r.host + r.pathname
            }

            let I = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || I.matches
            }

            function R(q, O) {
                var P;
                switch (O) {
                    case"add":
                        P = q.attr("tabindex"), P ? q.attr("data-wf-tabindex-swap", P) : q.attr("tabindex", "-1");
                        break;
                    case"remove":
                        P = q.attr("data-wf-tabindex-swap"), P ? (q.attr("tabindex", P), q.removeAttr("data-wf-tabindex-swap")) : q.removeAttr("tabindex");
                        break
                }
                q.toggleClass("wf-force-outline-none", O === "add")
            }

            function D(q) {
                var O = q.currentTarget;
                if (!(xi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var P = C(O) ? O.hash : "";
                    if (P !== "") {
                        var U = e(P);
                        U.length && (q && (q.preventDefault(), q.stopPropagation()), M(P, q), window.setTimeout(function () {
                            N(U, function () {
                                R(U, "add"), U.get(0).focus({preventScroll: !0}), R(U, "remove")
                            })
                        }, q ? 0 : 300))
                    }
                }
            }

            function M(q) {
                if (r.hash !== q && n && n.pushState && !(xi.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== q && n.pushState({hash: q}, "", q)
                }
            }

            function N(q, O) {
                var P = i.scrollTop(), U = k(q);
                if (P !== U) {
                    var V = X(q, P, U), Z = Date.now(), J = function () {
                        var F = Date.now() - Z;
                        window.scroll(0, H(P, U, F, V)), F <= V ? s(J) : typeof O == "function" && O()
                    };
                    s(J)
                }
            }

            function k(q) {
                var O = e(f), P = O.css("position") === "fixed" ? O.outerHeight() : 0, U = q.offset().top - P;
                if (q.data("scroll") === "mid") {
                    var V = i.height() - P, Z = q.outerHeight();
                    Z < V && (U -= Math.round((V - Z) / 2))
                }
                return U
            }

            function X(q, O, P) {
                if (L()) return 0;
                var U = 1;
                return a.add(q).each(function (V, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (U = J)
                }), (472.143 * Math.log(Math.abs(O - P) + 125) - 2e3) * U
            }

            function H(q, O, P, U) {
                return P > U ? O : q + (O - q) * Y(P / U)
            }

            function Y(q) {
                return q < .5 ? 4 * q * q * q : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1
            }

            function Q() {
                var {WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: O} = t;
                o.on(O, g, D), o.on(q, E, function (P) {
                    P.preventDefault()
                }), document.head.insertBefore(A, document.head.firstChild)
            }

            return {ready: Q}
        })
    });
    var C_ = c((Bj, S_) => {
        "use strict";
        var TB = et();
        TB.define("touch", S_.exports = function (e) {
            var t = {}, r = window.getSelection;
            e.event.special.tap = {bindType: "click", delegateType: "click"}, t.init = function (o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), f, E;
                o.addEventListener("touchstart", g, !1), o.addEventListener("touchmove", p, !1), o.addEventListener("touchend", A, !1), o.addEventListener("touchcancel", S, !1), o.addEventListener("mousedown", g, !1), o.addEventListener("mousemove", p, !1), o.addEventListener("mouseup", A, !1), o.addEventListener("mouseout", S, !1);

                function g(C) {
                    var I = C.touches;
                    I && I.length > 1 || (a = !0, I ? (s = !0, f = I[0].clientX) : f = C.clientX, E = f)
                }

                function p(C) {
                    if (a) {
                        if (s && C.type === "mousemove") {
                            C.preventDefault(), C.stopPropagation();
                            return
                        }
                        var I = C.touches, L = I ? I[0].clientX : C.clientX, R = L - E;
                        E = L, Math.abs(R) > u && r && String(r()) === "" && (i("swipe", C, {direction: R > 0 ? "right" : "left"}), S())
                    }
                }

                function A(C) {
                    if (a && (a = !1, s && C.type === "mouseup")) {
                        C.preventDefault(), C.stopPropagation(), s = !1;
                        return
                    }
                }

                function S() {
                    a = !1
                }

                function T() {
                    o.removeEventListener("touchstart", g, !1), o.removeEventListener("touchmove", p, !1), o.removeEventListener("touchend", A, !1), o.removeEventListener("touchcancel", S, !1), o.removeEventListener("mousedown", g, !1), o.removeEventListener("mousemove", p, !1), o.removeEventListener("mouseup", A, !1), o.removeEventListener("mouseout", S, !1), o = null
                }

                this.destroy = T
            }

            function i(o, a, s) {
                var u = e.Event(o, {originalEvent: a});
                e(a.target).trigger(u, s)
            }

            return t.instance = t.init(document), t
        })
    });
    var L_ = c((kj, R_) => {
        "use strict";
        var xs = et();
        xs.define("forms", R_.exports = function (e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob,
                s = ".w-form", u, f = /e(-)?mail/i, E = /^\S+@\S+$/, g = window.alert, p = xs.env(), A, S, T,
                C = /list-manage[1-9]?.com/i, I = t.debounce(function () {
                    g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function () {
                L(), !p && !A && D()
            };

            function L() {
                u = e("html").attr("data-wf-site"), S = "https://webflow.com/api/v1/form/" + u, a && S.indexOf("https://webflow.com") >= 0 && (S = S.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${S}/signFile`, i = e(s + " form"), i.length && i.each(R)
            }

            function R(F, W) {
                var d = e(W), v = e.data(W, s);
                v || (v = e.data(W, s, {form: d})), M(v);
                var y = d.closest("div.w-form");
                v.done = y.find("> .w-form-done"), v.fail = y.find("> .w-form-fail"), v.fileUploads = y.find(".w-file-upload"), v.fileUploads.each(function (j) {
                    V(j, v)
                });
                var h = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
                v.done.attr("aria-label") || v.form.attr("aria-label", h), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", h + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", h + " failure");
                var B = v.action = d.attr("action");
                if (v.handler = null, v.redirect = d.attr("data-redirect"), C.test(B)) {
                    v.handler = O;
                    return
                }
                if (!B) {
                    if (u) {
                        v.handler = q;
                        return
                    }
                    I()
                }
            }

            function D() {
                A = !0, n.on("submit", s + " form", function (j) {
                    var K = e.data(this, s);
                    K.handler && (K.evt = j, K.handler(K))
                });
                let F = ".w-checkbox-input", W = ".w-radio-input", d = "w--redirected-checked",
                    v = "w--redirected-focus", y = "w--redirected-focus-visible",
                    h = ":focus-visible, [data-wf-focus-visible]", B = [["checkbox", F], ["radio", W]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + F + ")", j => {
                    e(j.target).siblings(F).toggleClass(d)
                }), n.on("change", s + ' form input[type="radio"]', j => {
                    e(`input[name="${j.target.name}"]:not(${F})`).map((oe, me) => e(me).siblings(W).removeClass(d));
                    let K = e(j.target);
                    K.hasClass("w-radio-input") || K.siblings(W).addClass(d)
                }), B.forEach(([j, K]) => {
                    n.on("focus", s + ` form input[type="${j}"]:not(` + K + ")", oe => {
                        e(oe.target).siblings(K).addClass(v), e(oe.target).filter(h).siblings(K).addClass(y)
                    }), n.on("blur", s + ` form input[type="${j}"]:not(` + K + ")", oe => {
                        e(oe.target).siblings(K).removeClass(`${v} ${y}`)
                    })
                })
            }

            function M(F) {
                var W = F.btn = F.form.find(':input[type="submit"]');
                F.wait = F.btn.attr("data-wait") || null, F.success = !1, W.prop("disabled", !1), F.label && W.val(F.label)
            }

            function N(F) {
                var W = F.btn, d = F.wait;
                W.prop("disabled", !0), d && (F.label = W.val(), W.val(d))
            }

            function k(F, W) {
                var d = null;
                return W = W || {}, F.find(':input:not([type="submit"]):not([type="file"])').each(function (v, y) {
                    var h = e(y), B = h.attr("type"), j = h.attr("data-name") || h.attr("name") || "Field " + (v + 1);
                    j = encodeURIComponent(j);
                    var K = h.val();
                    if (B === "checkbox") K = h.is(":checked"); else if (B === "radio") {
                        if (W[j] === null || typeof W[j] == "string") return;
                        K = F.find('input[name="' + h.attr("name") + '"]:checked').val() || null
                    }
                    typeof K == "string" && (K = e.trim(K)), W[j] = K, d = d || Q(h, B, j, K)
                }), d
            }

            function X(F) {
                var W = {};
                return F.find(':input[type="file"]').each(function (d, v) {
                    var y = e(v), h = y.attr("data-name") || y.attr("name") || "File " + (d + 1),
                        B = y.attr("data-value");
                    typeof B == "string" && (B = e.trim(B)), W[h] = B
                }), W
            }

            let H = {_mkto_trk: "marketo"};

            function Y() {
                return document.cookie.split("; ").reduce(function (W, d) {
                    let v = d.split("="), y = v[0];
                    if (y in H) {
                        let h = H[y], B = v.slice(1).join("=");
                        W[h] = B
                    }
                    return W
                }, {})
            }

            function Q(F, W, d, v) {
                var y = null;
                return W === "password" ? y = "Passwords cannot be submitted." : F.attr("required") ? v ? f.test(F.attr("type")) && (E.test(v) || (y = "Please enter a valid email address for: " + d)) : y = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !v && (y = "Please confirm you\u2019re not a robot."), y
            }

            function q(F) {
                U(F), P(F)
            }

            function O(F) {
                M(F);
                var W = F.form, d = {};
                if (/^https/.test(o.href) && !/^https/.test(F.action)) {
                    W.attr("method", "post");
                    return
                }
                U(F);
                var v = k(W, d);
                if (v) return g(v);
                N(F);
                var y;
                t.each(d, function (K, oe) {
                    f.test(oe) && (d.EMAIL = K), /^((full[ _-]?)?name)$/i.test(oe) && (y = K), /^(first[ _-]?name)$/i.test(oe) && (d.FNAME = K), /^(last[ _-]?name)$/i.test(oe) && (d.LNAME = K)
                }), y && !d.FNAME && (y = y.split(" "), d.FNAME = y[0], d.LNAME = d.LNAME || y[1]);
                var h = F.action.replace("/post?", "/post-json?") + "&c=?", B = h.indexOf("u=") + 2;
                B = h.substring(B, h.indexOf("&", B));
                var j = h.indexOf("id=") + 3;
                j = h.substring(j, h.indexOf("&", j)), d["b_" + B + "_" + j] = "", e.ajax({
                    url: h,
                    data: d,
                    dataType: "jsonp"
                }).done(function (K) {
                    F.success = K.result === "success" || /already/.test(K.msg), F.success || console.info("MailChimp error: " + K.msg), P(F)
                }).fail(function () {
                    P(F)
                })
            }

            function P(F) {
                var W = F.form, d = F.redirect, v = F.success;
                if (v && d) {
                    xs.location(d);
                    return
                }
                F.done.toggle(v), F.fail.toggle(!v), v ? F.done.focus() : F.fail.focus(), W.toggle(!v), M(F)
            }

            function U(F) {
                F.evt && F.evt.preventDefault(), F.evt = null
            }

            function V(F, W) {
                if (!W.fileUploads || !W.fileUploads[F]) return;
                var d, v = e(W.fileUploads[F]), y = v.find("> .w-file-upload-default"),
                    h = v.find("> .w-file-upload-uploading"), B = v.find("> .w-file-upload-success"),
                    j = v.find("> .w-file-upload-error"), K = y.find(".w-file-upload-input"),
                    oe = y.find(".w-file-upload-label"), me = oe.children(), ae = j.find(".w-file-upload-error-msg"),
                    de = B.find(".w-file-upload-file"), De = B.find(".w-file-remove-link"),
                    Ge = de.find(".w-file-upload-file-name"), $e = ae.attr("data-w-size-error"),
                    Ae = ae.attr("data-w-type-error"), ct = ae.attr("data-w-generic-error");
                if (p || oe.on("click keydown", function (_) {
                    _.type === "keydown" && _.which !== 13 && _.which !== 32 || (_.preventDefault(), K.click())
                }), oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), De.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), p) K.on("click", function (_) {
                    _.preventDefault()
                }), oe.on("click", function (_) {
                    _.preventDefault()
                }), me.on("click", function (_) {
                    _.preventDefault()
                }); else {
                    De.on("click keydown", function (_) {
                        if (_.type === "keydown") {
                            if (_.which !== 13 && _.which !== 32) return;
                            _.preventDefault()
                        }
                        K.removeAttr("data-value"), K.val(""), Ge.html(""), y.toggle(!0), B.toggle(!1), oe.focus()
                    }), K.on("change", function (_) {
                        d = _.target && _.target.files && _.target.files[0], d && (y.toggle(!1), j.toggle(!1), h.toggle(!0), h.focus(), Ge.text(d.name), x() || N(W), W.fileUploads[F].uploading = !0, Z(d, m))
                    });
                    var Dt = oe.outerHeight();
                    K.height(Dt), K.width(1)
                }

                function l(_) {
                    var w = _.responseJSON && _.responseJSON.msg, z = ct;
                    typeof w == "string" && w.indexOf("InvalidFileTypeError") === 0 ? z = Ae : typeof w == "string" && w.indexOf("MaxFileSizeError") === 0 && (z = $e), ae.text(z), K.removeAttr("data-value"), K.val(""), h.toggle(!1), y.toggle(!0), j.toggle(!0), j.focus(), W.fileUploads[F].uploading = !1, x() || M(W)
                }

                function m(_, w) {
                    if (_) return l(_);
                    var z = w.fileName, ee = w.postData, ce = w.fileId, G = w.s3Url;
                    K.attr("data-value", ce), J(G, ee, d, z, b)
                }

                function b(_) {
                    if (_) return l(_);
                    h.toggle(!1), B.css("display", "inline-block"), B.focus(), W.fileUploads[F].uploading = !1, x() || M(W)
                }

                function x() {
                    var _ = W.fileUploads && W.fileUploads.toArray() || [];
                    return _.some(function (w) {
                        return w.uploading
                    })
                }
            }

            function Z(F, W) {
                var d = new URLSearchParams({name: F.name, size: F.size});
                e.ajax({type: "GET", url: `${T}?${d}`, crossDomain: !0}).done(function (v) {
                    W(null, v)
                }).fail(function (v) {
                    W(v)
                })
            }

            function J(F, W, d, v, y) {
                var h = new FormData;
                for (var B in W) h.append(B, W[B]);
                h.append("file", d, v), e.ajax({
                    type: "POST",
                    url: F,
                    data: h,
                    processData: !1,
                    contentType: !1
                }).done(function () {
                    y(null)
                }).fail(function (j) {
                    y(j)
                })
            }

            return r
        })
    });
    var q_ = c((Xj, P_) => {
        "use strict";
        var At = et(), IB = qi(), ut = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            N_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        At.define("slider", P_.exports = function (e, t) {
            var r = {}, n = e.tram, i = e(document), o, a, s = At.env(), u = ".w-slider",
                f = '<div class="w-slider-dot" data-wf-ignore />',
                E = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                g = "w-slider-force-show", p = IB.triggers, A, S = !1;
            r.ready = function () {
                a = At.env("design"), T()
            }, r.design = function () {
                a = !0, setTimeout(T, 1e3)
            }, r.preview = function () {
                a = !1, T()
            }, r.redraw = function () {
                S = !0, T(), S = !1
            }, r.destroy = C;

            function T() {
                o = i.find(u), o.length && (o.each(R), !A && (C(), I()))
            }

            function C() {
                At.resize.off(L), At.redraw.off(r.redraw)
            }

            function I() {
                At.resize.on(L), At.redraw.on(r.redraw)
            }

            function L() {
                o.filter(":visible").each(V)
            }

            function R(d, v) {
                var y = e(v), h = e.data(v, u);
                h || (h = e.data(v, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {keyboard: !1, mouse: !1},
                    el: y,
                    config: {}
                })), h.mask = y.children(".w-slider-mask"), h.left = y.children(".w-slider-arrow-left"), h.right = y.children(".w-slider-arrow-right"), h.nav = y.children(".w-slider-nav"), h.slides = h.mask.children(".w-slide"), h.slides.each(p.reset), S && (h.maskWidth = 0), y.attr("role") === void 0 && y.attr("role", "region"), y.attr("aria-label") === void 0 && y.attr("aria-label", "carousel");
                var B = h.mask.attr("id");
                if (B || (B = "w-slider-mask-" + d, h.mask.attr("id", B)), !a && !h.ariaLiveLabel && (h.ariaLiveLabel = e(E).appendTo(h.mask)), h.left.attr("role", "button"), h.left.attr("tabindex", "0"), h.left.attr("aria-controls", B), h.left.attr("aria-label") === void 0 && h.left.attr("aria-label", "previous slide"), h.right.attr("role", "button"), h.right.attr("tabindex", "0"), h.right.attr("aria-controls", B), h.right.attr("aria-label") === void 0 && h.right.attr("aria-label", "next slide"), !n.support.transform) {
                    h.left.hide(), h.right.hide(), h.nav.hide(), A = !0;
                    return
                }
                h.el.off(u), h.left.off(u), h.right.off(u), h.nav.off(u), D(h), a ? (h.el.on("setting" + u, O(h)), q(h), h.hasTimer = !1) : (h.el.on("swipe" + u, O(h)), h.left.on("click" + u, X(h)), h.right.on("click" + u, H(h)), h.left.on("keydown" + u, k(h, X)), h.right.on("keydown" + u, k(h, H)), h.nav.on("keydown" + u, "> div", O(h)), h.config.autoplay && !h.hasTimer && (h.hasTimer = !0, h.timerCount = 1, Q(h)), h.el.on("mouseenter" + u, N(h, !0, "mouse")), h.el.on("focusin" + u, N(h, !0, "keyboard")), h.el.on("mouseleave" + u, N(h, !1, "mouse")), h.el.on("focusout" + u, N(h, !1, "keyboard"))), h.nav.on("click" + u, "> div", O(h)), s || h.mask.contents().filter(function () {
                    return this.nodeType === 3
                }).remove();
                var j = y.filter(":hidden");
                j.addClass(g);
                var K = y.parents(":hidden");
                K.addClass(g), S || V(d, v), j.removeClass(g), K.removeClass(g)
            }

            function D(d) {
                var v = {};
                v.crossOver = 0, v.animation = d.el.attr("data-animation") || "slide", v.animation === "outin" && (v.animation = "cross", v.crossOver = .5), v.easing = d.el.attr("data-easing") || "ease";
                var y = d.el.attr("data-duration");
                if (v.duration = y != null ? parseInt(y, 10) : 500, M(d.el.attr("data-infinite")) && (v.infinite = !0), M(d.el.attr("data-disable-swipe")) && (v.disableSwipe = !0), M(d.el.attr("data-hide-arrows")) ? v.hideArrows = !0 : d.config.hideArrows && (d.left.show(), d.right.show()), M(d.el.attr("data-autoplay"))) {
                    v.autoplay = !0, v.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3, v.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var h = "mousedown" + u + " touchstart" + u;
                    a || d.el.off(h).one(h, function () {
                        q(d)
                    })
                }
                var B = d.right.width();
                v.edge = B ? B + 40 : 100, d.config = v
            }

            function M(d) {
                return d === "1" || d === "true"
            }

            function N(d, v, y) {
                return function (h) {
                    if (v) d.hasFocus[y] = v; else if (e.contains(d.el.get(0), h.relatedTarget) || (d.hasFocus[y] = v, d.hasFocus.mouse && y === "keyboard" || d.hasFocus.keyboard && y === "mouse")) return;
                    v ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && q(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && Q(d))
                }
            }

            function k(d, v) {
                return function (y) {
                    switch (y.keyCode) {
                        case ut.SPACE:
                        case ut.ENTER:
                            return v(d)(), y.preventDefault(), y.stopPropagation()
                    }
                }
            }

            function X(d) {
                return function () {
                    U(d, {index: d.index - 1, vector: -1})
                }
            }

            function H(d) {
                return function () {
                    U(d, {index: d.index + 1, vector: 1})
                }
            }

            function Y(d, v) {
                var y = null;
                v === d.slides.length && (T(), Z(d)), t.each(d.anchors, function (h, B) {
                    e(h.els).each(function (j, K) {
                        e(K).index() === v && (y = B)
                    })
                }), y != null && U(d, {index: y, immediate: !0})
            }

            function Q(d) {
                q(d);
                var v = d.config, y = v.timerMax;
                y && d.timerCount++ > y || (d.timerId = window.setTimeout(function () {
                    d.timerId == null || a || (H(d)(), Q(d))
                }, v.delay))
            }

            function q(d) {
                window.clearTimeout(d.timerId), d.timerId = null
            }

            function O(d) {
                return function (v, y) {
                    y = y || {};
                    var h = d.config;
                    if (a && v.type === "setting") {
                        if (y.select === "prev") return X(d)();
                        if (y.select === "next") return H(d)();
                        if (D(d), Z(d), y.select == null) return;
                        Y(d, y.select);
                        return
                    }
                    if (v.type === "swipe") return h.disableSwipe || At.env("editor") ? void 0 : y.direction === "left" ? H(d)() : y.direction === "right" ? X(d)() : void 0;
                    if (d.nav.has(v.target).length) {
                        var B = e(v.target).index();
                        if (v.type === "click" && U(d, {index: B}), v.type === "keydown") switch (v.keyCode) {
                            case ut.ENTER:
                            case ut.SPACE: {
                                U(d, {index: B}), v.preventDefault();
                                break
                            }
                            case ut.ARROW_LEFT:
                            case ut.ARROW_UP: {
                                P(d.nav, Math.max(B - 1, 0)), v.preventDefault();
                                break
                            }
                            case ut.ARROW_RIGHT:
                            case ut.ARROW_DOWN: {
                                P(d.nav, Math.min(B + 1, d.pages)), v.preventDefault();
                                break
                            }
                            case ut.HOME: {
                                P(d.nav, 0), v.preventDefault();
                                break
                            }
                            case ut.END: {
                                P(d.nav, d.pages), v.preventDefault();
                                break
                            }
                            default:
                                return
                        }
                    }
                }
            }

            function P(d, v) {
                var y = d.children().eq(v).focus();
                d.children().not(y)
            }

            function U(d, v) {
                v = v || {};
                var y = d.config, h = d.anchors;
                d.previous = d.index;
                var B = v.index, j = {};
                B < 0 ? (B = h.length - 1, y.infinite && (j.x = -d.endX, j.from = 0, j.to = h[0].width)) : B >= h.length && (B = 0, y.infinite && (j.x = h[h.length - 1].width, j.from = -h[h.length - 1].x, j.to = j.from - j.x)), d.index = B;
                var K = d.nav.children().eq(B).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(K).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), y.hideArrows && (d.index === h.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                var oe = d.offsetX || 0, me = d.offsetX = -h[d.index].x, ae = {x: me, opacity: 1, visibility: ""},
                    de = e(h[d.index].els), De = e(h[d.previous] && h[d.previous].els), Ge = d.slides.not(de),
                    $e = y.animation, Ae = y.easing, ct = Math.round(y.duration),
                    Dt = v.vector || (d.index > d.previous ? 1 : -1), l = "opacity " + ct + "ms " + Ae,
                    m = "transform " + ct + "ms " + Ae;
                if (de.find(N_).removeAttr("tabindex"), de.removeAttr("aria-hidden"), de.find("*").removeAttr("aria-hidden"), Ge.find(N_).attr("tabindex", "-1"), Ge.attr("aria-hidden", "true"), Ge.find("*").attr("aria-hidden", "true"), a || (de.each(p.intro), Ge.each(p.outro)), v.immediate && !S) {
                    n(de).set(ae), _();
                    return
                }
                if (d.index === d.previous) return;
                if (a || d.ariaLiveLabel.text(`Slide ${B + 1} of ${h.length}.`), $e === "cross") {
                    var b = Math.round(ct - ct * y.crossOver), x = Math.round(ct - b);
                    l = "opacity " + b + "ms " + Ae, n(De).set({visibility: ""}).add(l).start({opacity: 0}), n(de).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).wait(x).then({opacity: 1}).then(_);
                    return
                }
                if ($e === "fade") {
                    n(De).set({visibility: ""}).stop(), n(de).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(l).start({opacity: 1}).then(_);
                    return
                }
                if ($e === "over") {
                    ae = {x: d.endX}, n(De).set({visibility: ""}).stop(), n(de).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: me + h[d.index].width * Dt
                    }).add(m).start({x: me}).then(_);
                    return
                }
                y.infinite && j.x ? (n(d.slides.not(De)).set({
                    visibility: "",
                    x: j.x
                }).add(m).start({x: me}), n(De).set({
                    visibility: "",
                    x: j.from
                }).add(m).start({x: j.to}), d.shifted = De) : (y.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: oe
                }), d.shifted = null), n(d.slides).set({visibility: ""}).add(m).start({x: me}));

                function _() {
                    de = e(h[d.index].els), Ge = d.slides.not(de), $e !== "slide" && (ae.visibility = "hidden"), n(Ge).set(ae)
                }
            }

            function V(d, v) {
                var y = e.data(v, u);
                if (y) {
                    if (F(y)) return Z(y);
                    a && W(y) && Z(y)
                }
            }

            function Z(d) {
                var v = 1, y = 0, h = 0, B = 0, j = d.maskWidth, K = j - d.config.edge;
                K < 0 && (K = 0), d.anchors = [{els: [], x: 0, width: 0}], d.slides.each(function (me, ae) {
                    h - y > K && (v++, y += j, d.anchors[v - 1] = {
                        els: [],
                        x: h,
                        width: 0
                    }), B = e(ae).outerWidth(!0), h += B, d.anchors[v - 1].width += B, d.anchors[v - 1].els.push(ae);
                    var de = me + 1 + " of " + d.slides.length;
                    e(ae).attr("aria-label", de), e(ae).attr("role", "group")
                }), d.endX = h, a && (d.pages = null), d.nav.length && d.pages !== v && (d.pages = v, J(d));
                var oe = d.index;
                oe >= v && (oe = v - 1), U(d, {immediate: !0, index: oe})
            }

            function J(d) {
                var v = [], y, h = d.el.attr("data-nav-spacing");
                h && (h = parseFloat(h) + "px");
                for (var B = 0, j = d.pages; B < j; B++) y = e(f), y.attr("aria-label", "Show slide " + (B + 1) + " of " + j).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), d.nav.hasClass("w-num") && y.text(B + 1), h != null && y.css({
                    "margin-left": h,
                    "margin-right": h
                }), v.push(y);
                d.nav.empty().append(v)
            }

            function F(d) {
                var v = d.mask.width();
                return d.maskWidth !== v ? (d.maskWidth = v, !0) : !1
            }

            function W(d) {
                var v = 0;
                return d.slides.each(function (y, h) {
                    v += e(h).outerWidth(!0)
                }), d.slidesWidth !== v ? (d.slidesWidth = v, !0) : !1
            }

            return r
        })
    });
    Us();
    ks();
    Hs();
    qi();
    I_();
    A_();
    w_();
    C_();
    L_();
    q_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
    {
        "events": {
            "e": {
                "id": "e",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-2"
                    }
                },
                "mediaQueries": ["main", "medium", "small"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|6e0ed68a-6495-ecdb-a212-f23bc67b29d5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|6e0ed68a-6495-ecdb-a212-f23bc67b29d5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": true,
                    "playInReverse": false,
                    "scrollOffsetValue": 0,
                    "scrollOffsetUnit": "%",
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1702331171458
            },
            "e-3": {
                "id": "e-3",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-2",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-4"
                    }
                },
                "mediaQueries": ["tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|5c81183b-0a6c-f862-43ae-bcfb1a3896ce",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|5c81183b-0a6c-f862-43ae-bcfb1a3896ce",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": true,
                    "playInReverse": false,
                    "scrollOffsetValue": 0,
                    "scrollOffsetUnit": "%",
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1710710151219
            },
            "e-5": {
                "id": "e-5",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-6"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|fba31252-546f-3c18-e8d9-2e056e346d5b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|fba31252-546f-3c18-e8d9-2e056e346d5b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537652526
            },
            "e-7": {
                "id": "e-7",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-8"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|5e148d16-df89-50f7-76a6-ab5fb953800f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|5e148d16-df89-50f7-76a6-ab5fb953800f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537843224
            },
            "e-9": {
                "id": "e-9",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-10"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|1afe5aea-4660-3d05-981e-386c5355faef",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|1afe5aea-4660-3d05-981e-386c5355faef",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537869544
            },
            "e-11": {
                "id": "e-11",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-12"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|b02605b3-99f5-3fdc-ac72-b13355832190",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|b02605b3-99f5-3fdc-ac72-b13355832190",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537884574
            },
            "e-13": {
                "id": "e-13",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-14"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|a9ca3b50-b6f6-86f0-9033-8ff22f57ca1c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|a9ca3b50-b6f6-86f0-9033-8ff22f57ca1c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537896213
            },
            "e-15": {
                "id": "e-15",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-16"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|465d039d-ff40-60e0-d0cc-8cf4f940ec18",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|465d039d-ff40-60e0-d0cc-8cf4f940ec18",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537910554
            },
            "e-17": {
                "id": "e-17",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-18"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|c4e8e49a-3395-acc6-5207-76cfca426457",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|c4e8e49a-3395-acc6-5207-76cfca426457",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537939702
            },
            "e-19": {
                "id": "e-19",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-20"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|e9fb048e-48c4-88f8-72d6-f61103f12ea1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|e9fb048e-48c4-88f8-72d6-f61103f12ea1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537949259
            },
            "e-21": {
                "id": "e-21",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-22"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f45",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f45",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537960183
            },
            "e-23": {
                "id": "e-23",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-24"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f47",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f47",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537970462
            },
            "e-25": {
                "id": "e-25",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-26"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f49",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f49",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537979590
            },
            "e-27": {
                "id": "e-27",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-28"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4b",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537989866
            },
            "e-29": {
                "id": "e-29",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-30"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4d",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713537998498
            },
            "e-31": {
                "id": "e-31",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-32"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f4f",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538006613
            },
            "e-33": {
                "id": "e-33",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-34"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f51",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f51",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538014653
            },
            "e-35": {
                "id": "e-35",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-36"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f53",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|11b8fcf3-04fa-520b-ebbc-be836bd28f53",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538023972
            },
            "e-37": {
                "id": "e-37",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-38"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c34e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c34e",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538033214
            },
            "e-39": {
                "id": "e-39",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-40"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c350",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c350",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538046888
            },
            "e-41": {
                "id": "e-41",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-42"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c352",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c352",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538104776
            },
            "e-43": {
                "id": "e-43",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-44"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c354",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c354",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538116581
            },
            "e-45": {
                "id": "e-45",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-46"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c356",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c356",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538124931
            },
            "e-47": {
                "id": "e-47",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-48"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c358",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c358",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538135529
            },
            "e-49": {
                "id": "e-49",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-50"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c35a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c35a",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538144362
            },
            "e-51": {
                "id": "e-51",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-52"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c35c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c35c",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538153081
            },
            "e-53": {
                "id": "e-53",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-54"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713538800488
            },
            "e-101": {
                "id": "e-101",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-102"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568597101
            },
            "e-103": {
                "id": "e-103",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-104"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568618808
            },
            "e-105": {
                "id": "e-105",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-106"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fc8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568630595
            },
            "e-107": {
                "id": "e-107",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-108"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fca",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fca",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568644135
            },
            "e-109": {
                "id": "e-109",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-110"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fcc",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fcc",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568658716
            },
            "e-111": {
                "id": "e-111",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-112"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fce",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fce",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568673746
            },
            "e-113": {
                "id": "e-113",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-114"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd0",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd0",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568733794
            },
            "e-115": {
                "id": "e-115",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-116"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568742567
            },
            "e-117": {
                "id": "e-117",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-118"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fd9",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568754167
            },
            "e-119": {
                "id": "e-119",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-120"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdb",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdb",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568763968
            },
            "e-121": {
                "id": "e-121",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-122"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdd",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568774771
            },
            "e-123": {
                "id": "e-123",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-124"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdf",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fdf",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568784608
            },
            "e-125": {
                "id": "e-125",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-126"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe1",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568795795
            },
            "e-127": {
                "id": "e-127",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-128"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe3",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568806231
            },
            "e-129": {
                "id": "e-129",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-130"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe5",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568816348
            },
            "e-131": {
                "id": "e-131",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-132"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe7",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fe7",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568826036
            },
            "e-133": {
                "id": "e-133",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-134"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fee",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0fee",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568837279
            },
            "e-135": {
                "id": "e-135",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-136"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff0",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff0",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568849709
            },
            "e-137": {
                "id": "e-137",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-138"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff2",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568860659
            },
            "e-139": {
                "id": "e-139",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-140"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff4",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568872870
            },
            "e-141": {
                "id": "e-141",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-142"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff6",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568888825
            },
            "e-143": {
                "id": "e-143",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-144"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ff8",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568898514
            },
            "e-145": {
                "id": "e-145",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-146"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ffa",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ffa",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568907026
            },
            "e-147": {
                "id": "e-147",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {
                    "id": "",
                    "actionTypeId": "GENERAL_START_ACTION",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "actionListId": "a-3",
                        "affectedElements": {},
                        "playInReverse": false,
                        "autoStopEventId": "e-148"
                    }
                },
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ffc",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                },
                "targets": [{
                    "id": "659b8b61e70ccba2b8e3ecf0|23ba13ac-eafd-cd6e-3b47-4919f79d0ffc",
                    "appliesTo": "ELEMENT",
                    "styleBlockIds": []
                }],
                "config": {
                    "loop": false,
                    "playInReverse": false,
                    "scrollOffsetValue": null,
                    "scrollOffsetUnit": null,
                    "delay": null,
                    "direction": null,
                    "effectIn": null
                },
                "createdOn": 1713568915146
            }
        },
        "actionLists": {
            "a": {
                "id": "a",
                "title": "infinite loop",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scrolling-container",
                                "selectorGuids": ["b1c7f92a-34f5-e364-3c70-a1c7d66f550a"]
                            },
                            "xValue": 0,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 10,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".glyph",
                                "selectorGuids": ["b587cc34-7010-2174-ad31-94a325e8cf77"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 7000,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scrolling-container",
                                "selectorGuids": ["b1c7f92a-34f5-e364-3c70-a1c7d66f550a"]
                            },
                            "xValue": -100,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 7000,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".glyph",
                                "selectorGuids": ["b587cc34-7010-2174-ad31-94a325e8cf77"]
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1702331219291
            },
            "a-2": {
                "id": "a-2",
                "title": "mobile marquee",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 0,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scrolling-mobile",
                                "selectorGuids": ["d06b3e5b-8634-c989-c63f-cc7a816fb471"]
                            },
                            "xValue": 0,
                            "xUnit": "px",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 10,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".glyph-mobile",
                                "selectorGuids": ["f636cffe-b3d5-51a8-98f3-0a48eef4c845"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-2-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 7000,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scrolling-mobile",
                                "selectorGuids": ["d06b3e5b-8634-c989-c63f-cc7a816fb471"]
                            },
                            "xValue": -200,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-2-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 7000,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".glyph-mobile",
                                "selectorGuids": ["f636cffe-b3d5-51a8-98f3-0a48eef4c845"]
                            },
                            "zValue": 360,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1710710187982
            },
            "a-3": {
                "id": "a-3",
                "title": "blur",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-3-n",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 300,
                            "target": {
                                "useEventTarget": true,
                                "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c350"
                            },
                            "filters": [{"type": "blur", "filterId": "70c8", "value": 3, "unit": "px"}]
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-3-n-2",
                        "actionTypeId": "STYLE_FILTER",
                        "config": {
                            "delay": 0,
                            "easing": "easeIn",
                            "duration": 100,
                            "target": {
                                "useEventTarget": true,
                                "id": "659b8b61e70ccba2b8e3ecf0|3f15acd8-9c3f-85a4-01f5-a2882d01c350"
                            },
                            "filters": [{"type": "blur", "filterId": "70c8", "value": 0, "unit": "px"}]
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1713537661807
            }
        },
        "site": {
            "mediaQueries": [{"key": "main", "min": 992, "max": 10000}, {
                "key": "medium",
                "min": 768,
                "max": 991
            }, {"key": "small", "min": 480, "max": 767}, {"key": "tiny", "min": 0, "max": 479}]
        }
    }
);
